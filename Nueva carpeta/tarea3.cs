using System;

public class Calculadora
{
   
    public static void CalculadoraSimple(double num1, double num2, char operacion)
    {
        double resultado;
        switch (operacion)
        {
            case '+':
                resultado = num1 + num2;
                Console.WriteLine($"El resultado de la suma es: {resultado}");
                break;
            case '-':
                resultado = num1 - num2;
                Console.WriteLine($"El resultado de la resta es: {resultado}");
                break;
            case '*':
                resultado = num1 * num2;
                Console.WriteLine($"El resultado de la multiplicación es: {resultado}");
                break;
            case '/':
                if (num2 != 0)
                {
                    resultado = num1 / num2;
                    Console.WriteLine($"El resultado de la división es: {resultado}");
                }
                else
                {
                    Console.WriteLine("Error: No se puede dividir por cero.");
                }
                break;
            default:
                Console.WriteLine("Operación no válida.");
                break;
        }
    }

    
    public static void Main(string[] args)
    {
    
        CalculadoraSimple(10.5, 5.2, '+');
        CalculadoraSimple(20, 4, '-');
        CalculadoraSimple(7, 8.5, '*');
        CalculadoraSimple(50, 10, '/');
        CalculadoraSimple(10, 0, '/');
        CalculadoraSimple(5, 5, '%');
    }
}