<?php

// 1. Array de candidatos con sus votos iniciales
$votos = [
    'CandidatoA' => 0,
    'CandidatoB' => 0,
    'CandidatoC' => 0
];

/**
 * Emite un voto para un candidato específico.
 *
 * @param string $candidato El nombre del candidato.
 * @param array &$votos El array de votos pasado por referencia.
 */
function emitir_voto(string $candidato, array &$votos) {
    // Verificar si el candidato existe en el array
    if (array_key_exists($candidato, $votos)) {
        $votos[$candidato]++; // Incrementar el contador de votos para ese candidato
    } else {
        echo "Error: El candidato '$candidato' no existe.\n";
    }
}

// 2. Simular 10 votos aleatorios
echo "--- 🗳️ Simulando 10 votos aleatorios ---\n";
$candidatos = array_keys($votos); // Obtener los nombres de los candidatos
$numCandidatos = count($candidatos);

for ($i = 0; $i < 10; $i++) {
    // Elegir un candidato aleatorio del array
    $candidatoAleatorio = $candidatos[rand(0, $numCandidatos - 1)];
    emitir_voto($candidatoAleatorio, $votos);
    echo "Se ha emitido un voto para " . $candidatoAleatorio . "\n";
}

echo "\n--- 🎉 Resultados Finales de la Votación ---\n";
// 3. Imprimir los resultados finales
foreach ($votos as $candidato => $conteo) {
    echo $candidato . ": " . $conteo . " votos\n";
}

?>