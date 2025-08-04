<?php

$votos = [
    'CandidatoA' => 0,
    'CandidatoB' => 0,
    'CandidatoC' => 0
];

function emitir_voto(string $candidato, array &$votos) {
    // Verificar si el candidato existe en el array
    if (array_key_exists($candidato, $votos)) {
        $votos[$candidato]++;
    } else {
        echo "Error: El candidato '$candidato' no existe.\n";
    }
}

echo "--- 🗳️ Simulando 10 votos aleatorios ---\n";
$candidatos = array_keys($votos); 
$numCandidatos = count($candidatos);

for ($i = 0; $i < 10; $i++) {
    $candidatoAleatorio = $candidatos[rand(0, $numCandidatos - 1)];
    emitir_voto($candidatoAleatorio, $votos);
    echo "Se ha emitido un voto para " . $candidatoAleatorio . "\n";
}

echo "\n--- 🎉 Resultados Finales de la Votación ---\n";
foreach ($votos as $candidato => $conteo) {
    echo $candidato . ": " . $conteo . " votos\n";
}

?>