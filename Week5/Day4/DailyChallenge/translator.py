from googletrans import Translator
# note that you probably need to specify googletrans version when installing

french_words= ["Bonjour", "Au revoir", "Bienvenue", "A bientôt"]

# translator = Translator()
# print(french_words)
# # translated = translator.translate(french_words, src="fr",  dest = "en")
# for word in french_words:
#     translated = translator.translate(word, src="fr", dest="en")
#     print(translated.origin, translated.text)

# more reusable code.
def get_translated(words, source_language, destination_language):
    output_dict = {}
    translator = Translator()
    for word in words:
        translated= translator.translate(word, src=source_language, dest=destination_language)
        output_dict[word] = translated.text
    return output_dict

print(get_translated(french_words, "fr", "en"))