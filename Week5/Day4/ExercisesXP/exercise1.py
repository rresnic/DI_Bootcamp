class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount
    
    def __repr__(self) -> str:
        return f"{self.amount} {self.currency}{'s' if self.amount>1 else ''}"

    def __int__(self) -> int:
        return self.amount
    
    def __add__(self, something):
        if isinstance(something, Currency):
            if something.currency != self.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{something.currency}>")
            return self.amount + something.amount
        elif not type(something) == int and not type(something) == float:
            raise TypeError("Cannot add nonumeric value")
        return self.amount + something
    
    def __iadd__(self, something):
        if isinstance(something, Currency):
            if something.currency != self.currency:
                raise TypeError(f"Cannot add between Currency type <{self.currency}> and <{something.currency}>")
            self.amount += something.amount
        elif not type(something) == int and not type(something) == float:
            raise TypeError("Cannot add nonumeric value")
        else:
            self.amount += something
        return self

c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)
print(str(c1))
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)
c1 += 5
print(c1)
c1 += c2
print(c1)
c1 + c3
# >>> c1 = Currency('dollar', 5)
# >>> c2 = Currency('dollar', 10)
# >>> c3 = Currency('shekel', 1)
# >>> c4 = Currency('shekel', 10)

# >>> str(c1)
# '5 dollars'

# >>> int(c1)
# 5

# >>> repr(c1)
# '5 dollars'

# >>> c1 + 5
# 10

# >>> c1 + c2
# 15

# >>> c1 
# 5 dollars

# >>> c1 += 5
# >>> c1
# 10 dollars

# >>> c1 += c2
# >>> c1
# 20 dollars

# >>> c1 + c3
# TypeError: Cannot add between Currency type <dollar> and <shekel>
