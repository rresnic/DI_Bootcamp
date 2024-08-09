def get_dollar_value(my_word): 
    amount = my_word[1:]
    amount = amount.replace(',', '')
    return int(amount)

def possible_purchase(shop_dict, money):
    items = sorted(list(shop_dict.keys()), reverse=True) # using the agreed upon exercise understanding.
    current_amount = get_dollar_value(money)
    total_purchase = []
    while current_amount and len(items):
        current_item = items.pop()
        item_price = get_dollar_value(shop_dict[current_item])
        if current_amount > item_price:
            current_amount -= item_price
            total_purchase.append(current_item)
    
    return(total_purchase)


items_purchase = {
  "Water": "$1",
  "Bread": "$3",
  "TV": "$1,000",
  "Fertilizer": "$20"
}

wallet = "$300"
print(possible_purchase(items_purchase, wallet))
# ➞ ["Bread", "Fertilizer", "Water"]

items_purchase = {
  "Apple": "$4",
  "Honey": "$3",
  "Fan": "$14",
  "Bananas": "$4",
  "Pan": "$100",
  "Spoon": "$2"
}

wallet = "$100" 
print(possible_purchase(items_purchase, wallet))

# ➞ ["Apple", "Bananas", "Fan", "Honey", "Spoon"]

# In fact the prices of Apple + Honey + Fan + Bananas + Pan is more that $100, so you cannot by the Pan, 
# instead you can by the Spoon that is $2

items_purchase = {
  "Phone": "$999",
  "Speakers": "$300",
  "Laptop": "$5,000",
  "PC": "$1200"
}

wallet = "$1" 
print(possible_purchase(items_purchase, wallet))

# ➞ "Nothing"