
    # The Card class should have a suit (Hearts, Diamonds, Clubs, Spades) and a value (A,2,3,4,5,6,7,8,9,10,J,Q,K)
    # The Deck class :
    #     should have a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
    #     should have a method called deal which deals a single card from the deck. After a card is dealt, it should be removed from the deck.

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return f"{self.value} of {self.suit}"

from random import shuffle
class Deck:
    suits = ["Hearts", "Diamons", "Clubs", "Spades"]
    values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    def __init__(self) -> None:
        self.cards = []
        self.shuffle()

    def shuffle(self):
        card_list =[]
        for suit in Deck.suits:
            for value in Deck.values:
                card_list.append(Card(suit, value))
        shuffle(card_list)
        shuffle(card_list) # unnecessary, but fun
        self.cards = card_list
        
    def deal(self):
        card = self.cards.pop()
        return card

deck = Deck()
print(deck.deal())
print(deck.cards)