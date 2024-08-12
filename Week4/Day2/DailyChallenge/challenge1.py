matrix_string = "7iiTsxh%?i #sM $a #t%^r!"

def get_matrix_from_string(a_string, width = 3):
    if len(a_string) < width or len(a_string) % width != 0:
        return False # invalid string
    height = len(a_string) // width
    current_height = 0
    current_index = 0
    output_matrix = [[] for x in range(height)]
    while current_index < len(a_string):
        for i in range(width):
            output_matrix[current_height].append(a_string[current_index])
            current_index += 1
        current_height +=1
    return output_matrix

def get_column_words(a_matrix):
    height = len(a_matrix)
    width = len(a_matrix[0])
    col_words = [[] for x in range(width)]
    for i in range(width):
        for j in range(height):
            col_words[i].append(a_matrix[j][i])
    col_word_list =[]
    for i in range(width):
        col_word_list = col_word_list + col_words[i]
    return col_word_list
    
def filter_alpha(long_list):
    return ''.join([x  if x.isalpha() else ' ' for x in long_list])

def decode_str_matrix(a_string):
    return filter_alpha(get_column_words(get_matrix_from_string(a_string)))

print(decode_str_matrix(matrix_string))

