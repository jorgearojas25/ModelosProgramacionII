using EjercicioPatrones.Figuras;
using EjercicioPatrones.Interfaces;
using System;

namespace EjercicioPatrones
{
    class Program
    {
        static void Main(string[] args)
        {
            IFiguraGeometrica[] figuras = new IFiguraGeometrica[]
            {
                new Rectangulo {Alto = 5, Ancho = 5}
            };

            SumaFiguras calculadora = new SumaFiguras();
            calculadora.Calcular(figuras);
            Console.WriteLine($"Area total: {calculadora.SumatoriaAreas}\nPerimetro Total: {calculadora.SumatoriaPerimetros}");
            Console.ReadKey();
        }
    }
}
