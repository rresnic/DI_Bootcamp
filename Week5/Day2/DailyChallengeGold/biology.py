from random import randint
class Gene:
    def __init__(self, value = 1):
        self.value = value
    def flip(self):
        self.value = int(not self.value)
class Chromosome:
    def __init__(self, genes=[0,0,0,0,0,0,0,0,0,0]):
        self.genes = [Gene(x) for x in genes]
    def get_genes(self):
        return [gene.value for gene in self.genes]
    def mutate(self, probability=50):
        for gene in self.genes:
            heads = randint(1, 100)
            if heads < probability:
                gene.flip()
class DNA:
    def __init__(self, chromosomes=[[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0]]):
        self.chromosomes = []
        for chromosome in chromosomes:
            self.chromosomes.append(Chromosome(chromosome))
    def mutate(self, probability=50):
        for chromosome in self.chromosomes:
            heads = randint(1, 100)
            if heads < probability:
                chromosome.mutate()
    def get_chromosome_genes(self):
        genes = []
        for chromosome in self.chromosomes:
            genes += chromosome.get_genes()
        return genes
class Organism:
    def __init__(self, dna, environment):
        self.dna = dna
        self.environment = environment
    def get_1s(self):
        count = 0
        while self.dna.get_chromosome_genes().count(1) != 100:
            self.dna.mutate(self.environment)
            count += 1
            #print(self.dna.get_chromosome_genes().count(1)) uncomment to see the progress
        return count
a = Gene(0)
# print(a.value)
a.flip()
# print(a.value)

c = Chromosome()
# print(c.get_genes())
c.mutate()
# print(c.get_genes())

d = DNA()
# print(d.get_chromosome_genes())
d.mutate()
# print(d.get_chromosome_genes())
o = Organism(d, 90)
print(o.get_1s())

#this should work, but the I have no clue how long it would take to actually get there. Let me know if you manage to get to 100 all 1s.