using System;

public class Program
{
    public static void SumaPrimeros100Numeros()
    {

        int suma = 0;

        for (int i = 1; i <= 100; i++)
        {
            
            suma += i;
        }

        Console.WriteLine($"La suma de los primeros 100 números es: {suma}");
    }

    public static void Main(string[] args)
    {
        
        SumaPrimeros100Numeros();
    }
}