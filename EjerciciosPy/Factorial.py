def factorial(numero):
    if numero == 1:
        return numero
    elif numero == 0:
        return 1
    elif numero < 0:
        return 'No se puede tener el factorial de un numero negatvo'
    else:
        return numero*factorial(numero-1)


print("Su factorial es: ",factorial(int(input('Ingrese un numero: '))))
