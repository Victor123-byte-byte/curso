<?php


$tareas = [
    [
        'tarea' => 'Comprar leche',
        'completada' => false,
        'prioridad' => 'alta'
    ],
    [
        'tarea' => 'Enviar email a cliente',
        'completada' => false,
        'prioridad' => 'alta'
    ],
    [
        'tarea' => 'Hacer ejercicio',
        'completada' => false,
        'prioridad' => 'media'
    ],
    [
        'tarea' => 'Programar la reunión',
        'completada' => false,
        'prioridad' => 'alta'
    ]
];

echo "--- 📝 Lista de Tareas Original ---\n";

foreach ($tareas as $tarea) {
    $estado = $tarea['completada'] ? "✅" : "❌";
    echo $estado . " " . $tarea['tarea'] . " (Prioridad: " . $tarea['prioridad'] . ")\n";
}

$tareas[1]['completada'] = true;

echo "\n--- 🎯 Tareas Pendientes ---\n";

foreach ($tareas as $tarea) {
    if ($tarea['completada'] === false) {
        echo "❌ " . $tarea['tarea'] . " (Prioridad: " . $tarea['prioridad'] . ")\n";
    }
}

?>