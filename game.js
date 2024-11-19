document.addEventListener("DOMContentLoaded", () => {
    const choices = document.querySelectorAll('.choice');
    const resultadoDiv = document.getElementById('resultado');
    const maquinaChoice = document.getElementById('maquina-choice');
    
    // Opciones del juego
    const opciones = ['piedra', 'papel', 'tijera'];

    // Función para elegir aleatoriamente para la máquina
    function maquinaElige() {
        const randomIndex = Math.floor(Math.random() * 3);
        return opciones[randomIndex];
    }

    // Función para determinar el resultado
    function jugar(usuarioChoice) {
        const maquina = maquinaElige();
        maquinaChoice.textContent = maquina.charAt(0).toUpperCase() + maquina.slice(1); // Mostrar elección de la máquina
        
        // Lógica para determinar el ganador
        if (usuarioChoice === maquina) {
            resultadoDiv.textContent = "¡Es un empate!";
        } else if (
            (usuarioChoice === 'piedra' && maquina === 'tijera') ||
            (usuarioChoice === 'papel' && maquina === 'piedra') ||
            (usuarioChoice === 'tijera' && maquina === 'papel')
        ) {
            resultadoDiv.textContent = "¡Ganaste!";
        } else {
            resultadoDiv.textContent = "¡Perdiste!";
        }
    }

    // Asignar evento de clic a cada elección
    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const userChoice = choice.id;  // Piedra, Papel o Tijera
            jugar(userChoice);  // Llama a la función para jugar
        });
    });
});
