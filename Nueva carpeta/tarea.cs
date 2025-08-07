using System;

class MainClass {
  public static void Main (string[] args) {
    ParOImpar(3);
  }

  public static void ParOImpar(int numero)
  {
    if (numero % 2 == 0)
    {
        Console.WriteLine($"El número {numero} es par.");
    }
    else
    {
        Console.WriteLine($"El número {numero} es impar.");
    }
  }
}