# Morse code dictionary
morse_code_dict = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    ' ': ' ',  
}

reverse_dict = {value: key for key, value in morse_code_dict.items()}

def to_morse(text):
    text = text.upper()
    return '/'.join(' '.join(morse_code_dict.get(char, None) for char in word)for word in text.split(' '))

def to_text(morse):
    morse_words = morse.split('/')
    text = ""
    for word in morse_words:
        chars = word.split()
        for char in chars:
            text += reverse_dict.get(char, "")
        text += " "
    return text

def main():
    sample_text = "SOS please help me"
    morse_translation = to_morse(sample_text)
    print(f"Original Text: {sample_text}")
    print(f"Morse Code: {morse_translation}")

    morse_code = "... --- .../.--. .-.. . .- ... ./.... . .-.. .--./-- ."
    text_translation = to_text(morse_code)
    print(f"Morse Code: {morse_code}")
    print(f"Translated Text: {text_translation}")
main()