const $ = s => document.querySelector(s);

//Potencia
const potenciaBaseInput = $('.potenciaBaseInput');
const potenciaExponenteInput = $('.potenciaExponenteInput');
const potenciaOutput = $('.potenciaOutput');

const potencia = (base,exponente) => {
  if(exponente == 0) return 1;
  if(exponente == '') return 0;
  if(base == '') return 0;
  else return base * potencia(base, exponente-1)
};

// const ArrayElemtns = [potenciaBaseInput,potenciaExponenteInput].forEach((elemento)=>
// {
//     elemento.addEventListener('input',({target})=> 
//     {
//         updateValuePotencia();
//     });
// });

const base = potenciaBaseInput.addEventListener('input', ({ target }) => {
    console.log(target.value);
  });
  
const exponente = potenciaExponenteInput.addEventListener('input', ({ target }) => {
    console.log(target.value);
    });

    const updateValuePotencia = (base, exponente) => {
        potenciaOutput.innerText =  potencia(base, exponente) 
    };

const updateValuePotencia = (base, exponente) => {
    potenciaOutput.innerText =  potencia(base, exponente) 
};


//SerieFibonacci
const fibonacciInput = $('.fibonacciInput');
const fibonacciOutput = $('.fibonacciOutput');

const fibonacci = n => {
  const cache = {};

  const f = n => {
    if (n <= 1) return 1;
    if (n in cache) return cache[n];
    return cache[n] = f(n - 1) + f(n - 2);
  };

  return f(n);
};

const randomInt = (min = 0, max = 1000) =>
Math.floor(Math.random() * (max - min + 1)) + min;


const updateValue = value => {
  fibonacciOutput.innerText = value !== '' ?
  fibonacci(value) :
  'Un numero por favor';
};

fibonacciInput.addEventListener('input', ({ target }) => {
  updateValue(target.value);
});

fibonacciInput.value = randomInt();
updateValue(fibonacciInput.value);

