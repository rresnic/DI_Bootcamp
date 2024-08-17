# Exercise 1 : Call History
# Instructions

#     Create a class called Phone. This class takes a parameter called phone_number. When instantiating an object create an attribute called call_history which value is an empty list.

#     Add a method called call that takes both self and other_phone (i.e another Phone object) as parameters. The method should print a string stating who called who, and add this string to the phone’s call_history.

#     Add a method called show_call_history. This method should print the call_history.

#     Add another attribute called messages to your __init__() method which value is an empty list.

#     Create a method called send_message which is similar to the call method. Each message should be saved as a dictionary with the following keys:
#         to : the number of another Phone object
#         from : your phone number (also a Phone object)
#         content

#     Create the following methods: show_outgoing_messages(self), show_incoming_messages(self), show_messages_from(self)

#     Test your code !!!

class Phone:
    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.call_history = []
        self.messages = []
    
    def call(self, phone):
        call_str =f"{self.phone_number} called {phone.phone_number}"
        print(call_str)
        self.call_history.append(call_str)
        phone.call_history.append(call_str) # I feel this is necessary
    
    def show_call_history(self):
        for call in self.call_history:
            print(call)
    
    def send_message(self, phone, text):
        mess_dict = {"to": phone.phone_number, "from": self.phone_number, "message": text}
        self.messages.append(mess_dict)
        phone.messages.append(mess_dict)
    
    def show_outgoing_messages(self):
        for message in self.messages:
            if message["from"] == self.phone_number:
                print(message)
    
    def show_incoming_messages(self):
        for message in self.messages:
            if message["to"] == self.phone_number:
                print(message)
    
    def show_messages_from(self, phone): # I'm sorry, but the intructed paramaeters make no sense unless you want them to put an input insite the function
        for message in self.messages:
            if message["from"] == phone.phone_number:
                print(message)

me = Phone(123456)
you = Phone(123412)
sam = Phone(99999)
me.call(you)
you.call(me)
me.send_message(you, "This is a first message")
me.send_message(you, "This is another")
me.send_message(sam, "And a third")
you.send_message(me, "Hello, this is you")
sam.send_message(me, "Hi, this is Sam")
print("Call history:")
me.show_call_history()
print("Incoming messages")
me.show_incoming_messages()
print("Outgoing")
me.show_outgoing_messages()
print("From Sam")
me.show_messages_from(sam)