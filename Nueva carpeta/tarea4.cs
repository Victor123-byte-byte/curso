using System;

public class Program
{

    public static void CategoriaEdad(int edad)
    {
        if (edad >= 0 && edad <= 12)
        {
            Console.WriteLine($"Con {edad} años, la categoría es: Niño");
        }
        else if (edad >= 13 && edad <= 17)
        {
            Console.WriteLine($"Con {edad} años, la categoría es: Adolescente");
        }
        else if (edad >= 18 && edad <= 59)
        {
            Console.WriteLine($"Con {edad} años, la categoría es: Adulto");
        }
        else if (edad >= 60)
        {
            Console.WriteLine($"Con {edad} años, la categoría es: Adulto Mayor");
        }
        else
        {
            Console.WriteLine($"Con {edad} años, la categoría es: Edad no válida");
        }
    }

    public static void Main(string[] args)
    {
        
        CategoriaEdad(10);
        CategoriaEdad(15);
        CategoriaEdad(35);
        CategoriaEdad(70);
        CategoriaEdad(-5);
    }
}