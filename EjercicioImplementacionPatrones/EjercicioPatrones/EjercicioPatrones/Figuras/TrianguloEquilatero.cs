using EjercicioPatrones.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EjercicioPatrones.Figuras
{
    public class TrianguloEquilatero : IFiguraGeometrica
    {
        public double Lados { get; } = 3;
        public double LongitudLados { get; set; }

        public double Area()
        {
            return Math.Sqrt(3) * Math.Pow(LongitudLados, 2) / 4;
        }

        public double Perimetro()
        {
            return LongitudLados * 3;
        }
    }
}
