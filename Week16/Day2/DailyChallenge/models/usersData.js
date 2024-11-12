const {db} = require("../config/db.js");
const bcrypt = require("bcrypt");

// const addUserDB = async(username, email, firstname, lastname, password) => {
//     const trx = await db.transaction();
//     try {
//         const [user_id] = await trx('users').insert({username, email, firstname, lastname}, ["id"]);
//         const hashed_password = await bcrypt.hash(password, 10);
//         await trx('hashpwd').insert({user_id, username, password:hashed_password});
//         await trx.commit();
//         console.log("user added");

//     }catch (error){
//         await trx.rollback();
//         console.log(error);
//     }
// }

const insertUser = async (trx, username, email, password, firstname=null, lastname=null) => {
  // Insert user into the 'users' table
  const [user] = await trx('users').insert({ username, email, firstname, lastname },["id", "username", "email"]
  );

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Insert into the 'hashpwd' table
  const [hashedRecord] = await trx('hashpwd').insert({ user_id: user.id, username, password: hashedPassword },["user_id", "username"]);

  return user;
};

const updateUserDB = async (id, updateData, password) => {
  const trx = await db.transaction(); // Start the transaction
  try {
    // Update the user information in the 'users' table
    const user = await trx('users').update(updateData, ["id", "username", "email", "firstname", "lastname"]).where({ id });

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      await trx('hashpwd').update({ user_id: user.id, username: updateData.username, password: hashedPassword }, ["user_id", "username"]).where({ user_id: id });
    }

    await trx.commit();
    return { user }; 
  } catch (error) {
    await trx.rollback();
    console.log(error);
    throw error;
  }
};

const addUserDB = async (username, email, password, firstname=null, lastname=null) => {
  const trx = await db.transaction(); // Start the transaction
  try {
    const result = await insertUser(trx, username, email, password, firstname, lastname);
    await trx.commit();
    return result;
  } catch (error) {
    // If something goes wrong, rollback the transaction
    await trx.rollback();
    console.log("Error:", error);
    throw error; 
  }
};


async function createHashpwdtable() {
  const exists = await db.schema.hasTable('hashpwd');
  
  if (!exists) {
    await db.schema.createTable('hashpwd', (table) => {
      table.increments('id').primary(); // Primary key
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .notNullable(); // Foreign key to 'users' table
      table.string('username').notNullable(); // Username column
      table.string('password').notNullable(); // Hashed password column
      table.timestamps(true, true); // created_at and updated_at columns
    });

    console.log("Table 'hashed_passwords' created successfully.");
  } else {
    console.log("Table 'hashed_passwords' already exists.");
  }
}

const createUsersTable = async () =>{

    try {

        const exists = await db.schema.hasTable("users");
        if(!exists) {
            await db.schema.createTable("users", (table) => {
                table.increments('id');
                table.string('username').notNullable();
                table.string('email');
                table.string('firstname');
                table.string('lastname');
            });
            console.log("users table created");

        } else {
            console.log("users table already exists");
    }
    } catch(error) {
        console.log(error)
    }

}
// Get all 
const getAllUsers = () => {
    return db("users").select("id", "username", "email", "firstname", "lastname")
}

const getUserById = (id) => {
    return db("users").select("id", "username", "email", "firstname", "lastname").where({id});
};

const insertUsers = (username, email, password, firstname, lastname) => {
    return addUserDB(username, email, password, firstname, lastname);
}

const updateUser = async (id, username, email, password, firstname, lastname) => {
    // Prepare the update data object based on provided parameters
    const updateData = {};
    if (username !== undefined) updateData.username = username;
    if (email !== undefined) updateData.email = email;
    if (firstname !== undefined) updateData.firstname = firstname;
    if (lastname !== undefined) updateData.lastname = lastname;

    // If no update data is provided (empty object), return a message
    if (Object.keys(updateData).length === 0 && password === undefined) {
        return { message: "No updated fields provided" };
    }

    // Call updateUserDB, passing the updateData and password (if provided)
    try {
        // Make sure password is handled separately since it needs to be hashed
        return updateUserDB(id, updateData, password); 
    } catch (error) {
        console.log("Error:", error);
        throw error;
    }
};

const deleteUser = (id) => {
    return db("users").where({id}).del().returning(["id", "username", "firstname", "lastname"]);
}

const checkLogin = async (email, password) => {
  try {
    // Step 1: Retrieve the user based on the email from the 'users' table
    const [user] = await db('users').where({ email }).select('id', 'username', 'email');

    if (!user) {
      // If the user doesn't exist, return an error
      throw new Error('User not found');
    }

    // Step 2: Retrieve the hashed password from the 'hashpwd' table based on user id
    const [hashedRecord] = await db('hashpwd').where({ user_id: user.id }).select('password');

    if (!hashedRecord) {
      // If no password hash record is found, something went wrong
      throw new Error('Password record not found');
    }

    // Step 3: Compare the provided password with the stored hashed password
    const isPasswordCorrect = await bcrypt.compare(password, hashedRecord.password);

    if (!isPasswordCorrect) {
      // If the password doesn't match, return an error
      throw new Error('Incorrect password');
    }

    // If all checks pass, return the user (you could return more info if needed)
    return { message: 'Login successful', user };
  } catch (error) {
    // Handle errors, this could be logging or sending an appropriate response
    throw error; // You could customize the error handling further
  }
};

module.exports = {
    createUsersTable,
    createHashpwdtable,
    insertUsers,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    checkLogin,
}