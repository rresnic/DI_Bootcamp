# In the file menu_manager.py, create a new class called MenuManager

# Create a Class Method called get_by_name that will return a single item from the Menu_Items table depending on it’s name, if an object is not found (there is no item matching the name in the get_by_name method) return None.

# Create a Class Method called all_items which will return a list of all the items from the Menu_Items table.

from menu_item import MenuItem
import psycopg2

class MenuManager:
    @classmethod
    def run_query(cls,query, params = None):
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
    
    @classmethod
    def get_by_name(cls, name):
        query = "SELECT * FROM menu_items WHERE item_name = %s"
        params = (name,)
        results = MenuManager.run_query(query, params)
        if results and len(results) > 0:
            return MenuItem.load_item_from_db(results[0])
        else:
            return None
        
    @classmethod
    def get_by_name_and_price(cls, name, price):
        query = "SELECT * FROM menu_items WHERE item_name = %s and item_price = %s"
        params = (name,price)
        results = MenuManager.run_query(query, params)
        if results and len(results) > 0:
            return MenuItem.load_item_from_db(results[0])
        else:
            return None
        
    @classmethod
    def all_items(cls):
        query = "SELECT * from menu_items"
        results = MenuManager.run_query(query)
        items =[]
        for row in results:
            items.append(MenuItem.load_item_from_db(row))
        return items
    
    # To allow the codebox to work, even though instructions said to name it all_itmes
    all = all_items

    @classmethod
    def all_item_menu(cls):
        query = "SELECT item_name, item_price from menu_items"
        results = MenuManager.run_query(query)
        return results

# codebox
def main():
    item = MenuItem('Burger', 35)
    item.save()
    item.delete()
    item.update('Veggie Burger', 37) # this should fail, as we just deleted that item and it should be saved before updating
    item2 = MenuManager.get_by_name('Beef Stew') # This should be none, as we never put in beef stew
    print(item2)
    items = MenuManager.all()
    for fruit in items:
        print(fruit)

