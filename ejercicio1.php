<?php

$frutas = ["Manzana🍎", "Banana🍌", "Naranja🍊", "Fresa🍓", "Uva🍇"];

echo "--- 🍇 Listado de frutas 🍇 ---\n";
foreach ($frutas as $fruta) {
    echo "• " . $fruta . "\n";
}

$producto = [
    "nombre" => "Manzana🍎",
    "precio" => 1.50,
    "stock" => 100
];

echo "\n--- 🛒 Detalles del producto 🛒 ---\n";

foreach ($producto as $clave => $valor) {
    echo "🔑 " . $clave . ": " . $valor . "\n";
}