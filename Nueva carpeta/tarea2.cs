using System;

class MainClass {
  public static void Main (string[] args) {

    PositivoNegativoCero(10);
    PositivoNegativoCero(-5);
    PositivoNegativoCero(0);
  }

  public static void PositivoNegativoCero(int numero)
  {
    if (numero > 0)
    {
        Console.WriteLine($"El número {numero} es positivo.");
    }
    else if (numero < 0)
    {
        Console.WriteLine($"El número {numero} es negativo.");
    }
    else
    {
        Console.WriteLine($"El número es cero.");
    }
  }
}