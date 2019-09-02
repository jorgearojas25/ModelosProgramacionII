using EjercicioPatrones.Interfaces;
using EjercicioPatrones.Operaciones;
using System;
using System.Collections.Generic;
using System.Text;

namespace EjercicioPatrones
{
    public class SumaFiguras
    {
        public double SumatoriaAreas { get; set; }
        public double SumatoriaPerimetros { get; set; }

        public void Calcular(IEnumerable<IFiguraGeometrica> figuras)
        {
            CalculoArea calculoArea = new CalculoArea();
            CalculoPerimetro calculoPerimetro = new CalculoPerimetro();

            SumatoriaAreas = calculoArea.SumaAreas(figuras);
            SumatoriaPerimetros = calculoPerimetro.SumaPerimetros(figuras);
        }
    }
}
