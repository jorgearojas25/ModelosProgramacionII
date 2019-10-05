potencia :: Integer -> Integer -> Integer
potencia m 0 = 1
potencia m n = m*(potencia m (n-1))


fibo :: Integer -> Integer
fibo 0 = 0
fibo 1 = 1
fibo n = fibo (n-1) + fibo (n-2)

divisionResta x y 
   |(x < y)  =  0
   |otherwise =  divisionResta (x - y) y + 1 

main = do 
 print(potencia 6 1 )
 print(fibo 8)
 print(divisionResta 10 2)
