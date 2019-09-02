def funcionPotencia(base, exponente):
	result = 1
	if base == 0:
		return 0
	if exponente == 0:
		return 1
	for exp in range(0, exponente, 1):
		result *= base
	return result


def funcionFibonacci(posicion):
    posicion1 = 0
    posicion2 = 1
    for pos in range(0, posicion, 1):
        posicionX = posicion1 + posicion2
        posicion1 = posicion2
        posicion2 = posicionX
    return posicion2


def funcionDivision(dividendo, divisor):
    count = 0
    dividendo = dividendo - divisor
    while dividendo >= 0:
        count = count + 1
        dividendo -= divisor
    return count


print(funcionPotencia(5, 5))
print(funcionFibonacci(8))
print(funcionDivision(10, 5))
