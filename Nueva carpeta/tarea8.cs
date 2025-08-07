using System;

public class Program
{
    
    public static void ImprimirNumerosPares()
    {
        Console.WriteLine("Números pares del 1 al 50:");

    
        for (int i = 1; i <= 50; i++)
        {
        
            if (i % 2 == 0)
            {
            
                Console.WriteLine(i);
            }
        }
    }

    public static void Main(string[] args)
    {
    
        ImprimirNumerosPares();
    }
}