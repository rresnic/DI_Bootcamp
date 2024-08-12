def get_full_name(**kwargs):
    first_name = kwargs.get("first_name")
    middle_name = kwargs.get("middle_name", None)
    last_name = kwargs.get("last_name")

    full_name = first_name
    if middle_name:
        full_name += " " + middle_name
    full_name += " " + last_name
    return full_name.title()

print(get_full_name(first_name="john", middle_name="hooker", last_name="lee"))