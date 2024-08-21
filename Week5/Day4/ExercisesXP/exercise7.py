
    # Install the faker module, and take a look at the documentation and learn how to properly implement faker in your code.
    # Create an empty list called users. Tip: It should be a list of dictionaries.
    # Create a function that adds new dictionaries to the users list. Each user has the following keys: name, adress, langage_code. Use faker to populate them with fake data.
from faker import Faker
from faker.providers import DynamicProvider
language_codes_provider = DynamicProvider(
     provider_name="language_code",
     elements=["en", "fr", "kr", "he", "ja"],
)
fake = Faker()
fake.add_provider(language_codes_provider)
users = []

def add_fake():
    users.append({"name": fake.name(), "address": fake.address(), "language_code": fake.language_code()})

for i in range(5):
    add_fake()

print(users)