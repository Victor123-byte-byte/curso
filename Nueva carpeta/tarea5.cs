using System;

public class Program
{
    
    public static void TablaDeMultiplicar(int numero)
    {
        Console.WriteLine($"--- Tabla de multiplicar del {numero} ---");
        for (int i = 1; i <= 10; i++)
        {
           
            int resultado = numero * i;
            Console.WriteLine($"{numero} x {i} = {resultado}");
        }
        Console.WriteLine("-------------------------------------");
    }

    public static void Main(string[] args)
    {
       
        TablaDeMultiplicar(7);

    }
}