import math

class Circle:
    pi = math.pi
    def __init__(self, radius=None, diameter=None):
        if (not radius and not diameter) or (radius and diameter):
            raise ValueError("Must supply exactly one of radius or diameter")
        if radius:
            self.radius = radius
        else:
            self.radius = diameter / 2

    @property
    def diameter(self):
        return 2 * self.radius
    
    @property
    def area(self):
        return self.radius * self.radius * self.pi
    
    @property
    def circumference(self):
        return 2 * self.pi * self.radius
    
    def __gt__(self, other_circle):
        if not isinstance(other_circle, Circle):
            raise TypeError("Can only compare circles with other circles")
        return self.radius > other_circle.radius
    
    def __lt__(self, other_circle):
        if not isinstance(other_circle, Circle):
            raise TypeError("Can only compare circles with other circles")
        return self.radius < other_circle.radius
    
    def __ge__ (self, other_circle):
        if not isinstance(other_circle, Circle):
            raise TypeError("Can only compare circles with other circles")
        return self.radius >= other_circle.radius
    
    def __le__ (self, other_circle):
        if not isinstance(other_circle, Circle):
            raise TypeError("Can only compare circles with other circles")
        return self.radius <= other_circle.radius
    
    def __eq__(self, other_circle):
        if not isinstance(other_circle, Circle):
            raise TypeError("Can only compare circles with other circles")
        return self.radius == other_circle.radius
    
    def __add__(self, other_circle):
        if not isinstance(other_circle, Circle):
            raise TypeError("Can only add circles to other circles")
        return Circle(radius=(self.radius + other_circle.radius))
    
    # This seemed too verbose
    # def __repr__(self):
    #    return f"This is a circle.\nRadius: {self.radius}\nDiameter: {self.diameter}\nArea: {self.area}\nCircumference: {self.circumference}"
    
    def get_details(self):
        return f"This is a circle.\nRadius: {self.radius}\nDiameter: {self.diameter}\nArea: {self.area}\nCircumference: {self.circumference}"

    def __repr__(self):
        return f"Circle(radius={self.radius})"
    

test = Circle(diameter = 2)
print(test)

test_2 = Circle(radius=1)
print(test_2)

test_3 = test + test_2

circles = [test, test_3, test_2]

print(circles)
print(sorted(circles))
print(test_3.get_details())