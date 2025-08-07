using System;

public class Program
{
    public static void AdivinaContrasena()
    {
        string contrasenaSecreta = "goku123";

        string contrasenaIngresada;

        do
        {
            Console.WriteLine("Por favor, ingresa la contraseña:");
            contrasenaIngresada = Console.ReadLine();
.
            if (!contrasenaIngresada.Equals(contrasenaSecreta))
            {
                Console.WriteLine("Contraseña incorrecta. Inténtalo de nuevo.");
            }
            
        } while (!contrasenaIngresada.Equals(contrasenaSecreta));

        Console.WriteLine("¡Acceso concedido!");
    }

    public static void Main(string[] args)
    {
        AdivinaContrasena();
    }
}