using System;

public class Program
{
    public static void CuentaRegresiva()
    {
      
        int numero = 100;

      
        while (numero >= 0)
        {
           
            Console.WriteLine(numero);

          
            numero--;

         
            System.Threading.Thread.Sleep(1000);
        }

     
        Console.WriteLine("Despegue!");
    }

    public static void Main(string[] args)
    {
    
        CuentaRegresiva();
    }
}