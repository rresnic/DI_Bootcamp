def display_sorted(string_input):
    '''
    Gets a string of comma separated words and prints them in sorted order
    '''
    output_str = ','.join([x for x in sorted(string_input.split(','))])
    print(output_str)

input_str ="without,hello,bag,world"
display_sorted(input_str)