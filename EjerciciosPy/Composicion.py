class Pais(object):
    def __init__(self):
        self.cities = []

    def addCity(self, city):
        self.cities.append(city)


class Ciudad(object):
    def __init__(self, numPeople):
        self.people = []
        self.numPeople = numPeople

    def addPerson(self, person):
        self.people.append(person)

    def pertenecePais(self, country):
        self.country = country
        country.addCity(self)

        for i in range(self.numPeople):
            Person(i).perteneceCiudad(self)


class Person(object):
    def __init__(self, ID):
        self.ID = ID

    def perteneceCiudad(self, city):
        self.city = city
        city.addPerson(self)

    def personasPorPais(self):
        x = sum([len(c.people) for c in self.city.country.cities])
        return x


Pais1 = Pais()
Ciudad1 = Ciudad(10).pertenecePais(Pais1)
Ciudad2 = Ciudad(5).pertenecePais(Pais1)

print("El numero de habitanes es de: ", Pais1.cities[0].people[0].personasPorPais())
