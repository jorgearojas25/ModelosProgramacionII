using EjercicioPatrones.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EjercicioPatrones.Operaciones
{
    public class CalculoPerimetro
    {
        public double SumaPerimetros(IEnumerable<IPerimetro> figuras)
        {
            double perimetro = 0;
            foreach (var figura in figuras)
                perimetro += figura.Perimetro();
            return perimetro;
        }
    }
}
