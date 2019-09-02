using EjercicioPatrones.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;

namespace EjercicioPatrones.Operaciones
{
    public class CalculoArea
    {
        public double SumaAreas(IEnumerable<IArea> figuras)
        {
            double area = 0;
            foreach (var figura in figuras)
                area += figura.Area();
            return area;
        }
    }
}
