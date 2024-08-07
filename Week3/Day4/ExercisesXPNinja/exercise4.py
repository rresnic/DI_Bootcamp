program_input = " New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."
my_dict = {}
for word in sorted(program_input.split()): # to match output of example
    if word in my_dict:
        my_dict[word] += 1
    else:
        my_dict[word] = 1
for key in my_dict:
    print(f"{key}: {my_dict[key]}")
