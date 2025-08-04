<?php

$numero = 0; 

echo "Generando números aleatorios...\n";

while ($numero <= 50) {
    $numero = rand(1, 100); 
    echo "Número generado: " . $numero . "\n";
}

echo "¡Se generó un número mayor a 50! El bucle ha terminado.";

?>