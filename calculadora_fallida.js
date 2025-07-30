const OperacionesMatematicas = {
    sumar: function(a, b) {
        return a + b;
    },
    restar: function(a, b) {
        return a - b;
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b === 0) {
            return "Error: División por cero";
        }
        return a / b;
    },
    exponenciar: function(base, exponente) {
        return Math.pow(base, exponente);
    },
    modulo: function(dividendo, divisor) {
        if (divisor === 0) {
            return "Error: Módulo por cero";
        }
        return dividendo % divisor;
    },
    raizCuadrada: function(num) {
        if (num < 0) {
            return "Error: Raíz cuadrada de número negativo";
        }
        return Math.sqrt(num);
    }
};

function iniciarCalculadoraInteractiva() {
    let continuar = true;

    while (continuar) {
        const operacionElegidaStr = prompt(
            "Selecciona una operación:\n" +
            "1: Suma\n" +
            "2: Resta\n" +
            "3: Multiplicación\n" +
            "4: División\n" +
            "5: Exponenciación\n" +
            "6: Módulo\n" +
            "7: Raíz Cuadrada\n" +
            "0: Salir"
        );

        console.log("DEBUG: operacionElegidaStr (desde prompt) =", operacionElegidaStr);

        // Si el usuario cancela el prompt
        if (operacionElegidaStr === null) {
            continuar = false;
            console.log("Calculadora finalizada (cancelada). ¡Adiós!");
            break;
        }
        
        // Si el usuario escribe '0' para salir
        if (operacionElegidaStr.trim() === '0') { // Usamos trim() para eliminar espacios en blanco
            continuar = false;
            console.log("Calculadora finalizada (opción 0). ¡Adiós!");
            break;
        }

        const operacionElegida = parseInt(operacionElegidaStr);

        console.log("DEBUG: operacionElegida (después de parseInt) =", operacionElegida);
        console.log("DEBUG: Tipo de operacionElegida =", typeof operacionElegida);

        // --- NUEVA VALIDACIÓN CLAVE ---
        // Si la entrada no es un número válido después de parseInt, o si la cadena estaba vacía
        if (isNaN(operacionElegida) || operacionElegidaStr.trim() === '') {
            console.log("Entrada de operación inválida. Por favor, ingresa un número del 0 al 7.");
            console.log("-----------------------------------");
            continue; // Volver al inicio del bucle para pedir la operación de nuevo
        }
        // --- FIN NUEVA VALIDACIÓN ---

        let resultado;
        let num1, num2;

        try {
            if (operacionElegida === 7) {
                console.log("DEBUG: Opción es Raíz Cuadrada (7)");
                num1 = parseFloat(prompt("Introduce el número para la raíz cuadrada:"));
                if (isNaN(num1)) throw new Error("Entrada inválida. Por favor, introduce un número.");
                resultado = OperacionesMatematicas.raizCuadrada(num1);
            } else if (operacionElegida >= 1 && operacionElegida <= 6) {
                console.log("DEBUG: Opción es binaria (1-6)");
                num1 = parseFloat(prompt("Introduce el primer número:"));
                if (isNaN(num1)) throw new Error("Entrada inválida para el primer número. Por favor, introduce un número.");

                num2 = parseFloat(prompt("Introduce el segundo número:"));
                if (isNaN(num2)) throw new Error("Entrada inválida para el segundo número. Por favor, introduce un número.");

                switch (operacionElegida) {
                    case 1: resultado = OperacionesMatematicas.sumar(num1, num2); break;
                    case 2: resultado = OperacionesMatematicas.restar(num1, num2); break;
                    case 3: resultado = OperacionesMatematicas.multiplicar(num1, num2); break;
                    case 4: resultado = OperacionesMatematicas.dividir(num1, num2); break;
                    case 5: resultado = OperacionesMatematicas.exponenciar(num1, num2); break;
                    case 6: resultado = OperacionesMatematicas.modulo(num1, num2); break;
                }
            } else {
                // Esta parte ahora solo se alcanzará si la entrada es un número válido pero fuera del rango 0-7
                console.log("DEBUG: Opción es un número, pero fuera de rango. operacionElegida =", operacionElegida);
                console.log("Opción no válida. Por favor, ingresa un número del 0 al 7.");
            }

            if (resultado !== undefined) {
                console.log("El resultado es:", resultado);
            }

        } catch (error) {
            console.error("Error en la operación:", error.message);
        }
        console.log("-----------------------------------");
    }
}

iniciarCalculadoraInteractiva();