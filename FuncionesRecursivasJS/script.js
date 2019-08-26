const $ = s => document.querySelector(s);

const randomInt = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

//Potencia
const potenciaBaseInput = $(".potenciaBaseInput");
const potenciaExponenteInput = $(".potenciaExponenteInput");
const potenciaOutput = $(".potenciaOutput");

let base = (potenciaBaseInput.value = randomInt(0, 10));
let exponente = (potenciaExponenteInput.value = randomInt(0, 10));

const potencia = (base, exponente) => {
  if (base == 0 && exponente == 0) return 0;
  if (exponente == 0) return 1;
  if (base == 0) return 0;
  else return base * potencia(base, exponente - 1);
};

const updateValuePotencia = () => {
  potenciaOutput.innerText = potencia(base, exponente);
};

updateValuePotencia();

potenciaBaseInput.addEventListener("input", ({ target }) => {
  base = target.value;
  updateValuePotencia();
});

potenciaExponenteInput.addEventListener("input", ({ target }) => {
  exponente = target.value;
  updateValuePotencia();
});

//SerieFibonacci
const fibonacciInput = $(".fibonacciInput");
const fibonacciOutput = $(".fibonacciOutput");

const fibonacci = n => {
  const cache = {};

  const f = n => {
    if (n <= 1) return 1;
    if (n in cache) return cache[n];
    return (cache[n] = f(n - 1) + f(n - 2));
  };

  return f(n);
};

const updateValueFibonacci = value => {
  fibonacciOutput.innerText =
    value !== "" ? fibonacci(value) : "Un numero por favor";
};

fibonacciInput.addEventListener("input", ({ target }) => {
  updateValueFibonacci(target.value);
});

fibonacciInput.value = randomInt();
updateValueFibonacci(fibonacciInput.value);

//Division

const divisionDividendoInput = $(".divisionDividendoInput");
const divisionDivisorInput = $(".divisionDivisorInput");
const divisionOutput = $(".divisionOutput");

let dividendo = (divisionDividendoInput.value = randomInt(0, 10));
let divisor = (divisionDivisorInput.value = randomInt(0, 10));

const division = (dividendo, divisor) => {
  if (dividendo == 0 && divisor == 0) return "Ingrese numeros por favor";
  if(divisor <= 0) return NaN;
  return dividendo<divisor ? 0 : 1 + division(dividendo-divisor,divisor);
};

const updateValueDivision = () => {
  divisionOutput.innerText = division(dividendo, divisor);
};

updateValueDivision();

divisionDividendoInput.addEventListener("input", ({ target }) => {
  dividendo = target.value;
  updateValueDivision();
});

divisionDivisorInput.addEventListener("input", ({ target }) => {
  divisor = target.value;
  updateValueDivision();
});
