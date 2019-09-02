using EjercicioPatrones.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EjercicioPatrones.Figuras
{
    public class Rectangulo : IFiguraGeometrica
    {
        public double Lados { get; } = 4;
        public double Alto { get; set; }
        public double Ancho { get; set; }

        public double Area()
        {
            return Alto * Ancho;
        }

        public double Perimetro()
        {
            return (Alto * 2) + (Ancho * 2);
        }
    }
}
