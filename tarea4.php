<?php
echo "---Cuenta Regresiva---\n";

$numero = 10; // Nivel de batería inicial
while ($numero > 0) {
    echo "numero: " . $numero . "\n";
    $numero -= 1;
}