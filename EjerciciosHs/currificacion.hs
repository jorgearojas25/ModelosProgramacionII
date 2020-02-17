multThree :: (Num a) => a -> a -> a -> a
multThree x y z = x * y * z

main = do
    print(multThree 4 5 6)
