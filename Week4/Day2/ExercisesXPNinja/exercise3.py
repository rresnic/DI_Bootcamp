def box_printer(*args):
    max_length = max(len(arg) for arg in args) if args else 0
    print("*" * (max_length+5)) # 5 because 1 on each side and 3 commas in the print
    for arg in args:
        r_pad = max_length - len(arg) 
        print("*", arg, r_pad * " ", "*")
    print("*" * (max_length+5))

box_printer("Hello", "World", "in", "reallylongword", "a", "frame")