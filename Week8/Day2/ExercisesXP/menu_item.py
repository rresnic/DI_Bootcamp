import psycopg2

class MenuItem:
    HOSTNAME = '127.0.0.1'
    USERNAME = 'postgres'
    PASSWORD = "root"
    DATABASE = 'restaurant'
    def __init__(self, name, price) -> None:
        self.name = name
        self.price = price
        self.id = None
        self.saved = False
    #save, delete, update
    def save(self):
        if self.saved:
            self.update()
            return
        else:
            query = "INSERT into menu_items (item_name, item_price) VALUES (%s, %s) RETURNING item_id"
            params = (self.name, self.price)
            results = self.run_query(query, params)
            if results:
                self.id = results[0][0]  
                self.saved = True
            else:
                raise Exception("Error- no results in insert")
    
    def update(self, name=None, price=None):
        if self.id:
            if name:
                self.set_name(name)
            if price:
                self.set_price(price)
            query = "UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_id = %s RETURNING item_id"
            params = (self.name, self.price, self.id)
            results = self.run_query(query, params)
            return results
        else: 
            print("Must be saved first")
            return None
    
    def delete(self):
        if self.id:
            query = "DELETE FROM menu_items WHERE item_id = %s RETURNING item_id"
            params = (self.id,)
            result = self.run_query(query, params)
            if result:
                # print(f"Item with id {self.id} deleted successfully.")
                self.saved = False
                self.id = None
                return result
            else:
                print(f"Item with id {self.id} not found or already deleted.")
        else:
            print("This item does not exist or has not been saved yet.")

    def set_name(self, name):
        self.name = name
    
    def set_price(self, price):
        self.price = price

    def set_id(self, id):
        self.id = id

    def set_saved(self, boo):
        self.saved = boo

    @classmethod
    def load_item_from_db(cls, row):
        id = row[0]
        name = row[1]
        price = row[2]
        new_item = MenuItem(name, price)
        new_item.set_id(id)
        new_item.set_saved(True)
        return new_item
    
    def run_query(self,query, params = None):
        connection = psycopg2.connect(host=MenuItem.HOSTNAME, user=MenuItem.USERNAME, password=MenuItem.PASSWORD, dbname=MenuItem.DATABASE )
        cursor = connection.cursor()
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)
        
        results = cursor.fetchall()
        connection.commit()
        cursor.close()
        connection.close()
        return results
    
    def get_item(self):
        query = "SELECT * from menu_items WHERE item_id = %s"
        params = (self.id,)
        results = self.run_query(query, params)
        return results
         
    def __repr__(self) -> str:
        return f"Item: {self.name}\nPrice: {self.price}\nID: {self.id}\nSaved: {self.saved}"
