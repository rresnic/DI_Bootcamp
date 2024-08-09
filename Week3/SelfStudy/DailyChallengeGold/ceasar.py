SHIFT = 3
def encrypt_input(message):
    cypher_text = ""
    for character in message:
        cypher_text += chr(ord(character) + SHIFT)
    return cypher_text

def decrypt_input(encrypted_text):
    message = ""
    for character in encrypted_text:
        message += chr(ord(character) - SHIFT)
    return message


# test_message = "Hello world"
# print(encrypt_input(test_message))
# print(decrypt_input(encrypt_input(test_message)))
user_input = input("Choose mode: 1 for encryption, 2 for decryption or 3 to quit: ")
while user_input not in ["1", "2","3"]:
    print("Invalid")
    user_input = input("Choose mode: 1 for encryption, 2 for decryption or 3 to quit: ")
user_input = int(user_input)
if user_input == 1:
    user_message = input("Encryption mode. Please enter a message: ")
    print(encrypt_input(user_message))
elif user_input == 2:
    user_message = input("Decryption mode. Please enter an encrypted message: ")
    print(decrypt_input(user_message))
else:
    print("Goodbye")