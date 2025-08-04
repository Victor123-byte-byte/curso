<?php

$estudiantes = [
    [
        "nombre" => "Ana",
        "notas" => [
            "Matemáticas" => 95,
            "Historia" => 88,
            "Ciencias" => 92
        ]
    ],
    [
        "nombre" => "Luis",
        "notas" => [
            "Matemáticas" => 78,
            "Historia" => 85,
            "Ciencias" => 90
        ]
    ]
];

foreach ($estudiantes as $estudiante) {
    echo "--- Datos del estudiante: " . $estudiante["nombre"] . " ---\n";
    
    foreach ($estudiante["notas"] as $materia => $calificacion) {
        echo "💯 " . $materia . ": " . $calificacion . "\n";
    }
    echo "\n";
}

?>