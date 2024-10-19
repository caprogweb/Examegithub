function calificar() {
    let puntuacion = 0;

    // Pregunta 1
    const q1 = document.querySelector('input[name="q1"]:checked');
    if (q1 && q1.value === 'a') {
        puntuacion++;
    }

    // Pregunta 2
    const q2 = document.querySelector('input[name="q2"]:checked');
    if (q2 && q2.value === 'true') {
        puntuacion++;
    }

    // Pregunta 3
    const q3 = document.querySelector('input[name="q3"]:checked');
    if (q3 && q3.value === 'c') {
        puntuacion++;
    }

    // Pregunta 4
    const q4 = document.querySelector('input[name="q4"]:checked');
    if (q4 && q4.value === 'false') {
        puntuacion++;
    }

    // Pregunta 5
    const q5 = document.querySelector('input[name="q5"]:checked');
    if (q5 && q5.value === 'b') {
        puntuacion++;
    }

    // Pregunta 6
    const q6 = document.querySelector('input[name="q6"]:checked');
    if (q6 && q6.value === 'a') {
        puntuacion++;
    }

    // Pregunta 7
    const q7 = document.querySelector('input[name="q7"]:checked');
    if (q7 && q7.value === 'a') {
        puntuacion++;
    }

    // Pregunta 8
    const q8 = document.querySelector('input[name="q8"]:checked');
    if (q8 && q8.value === 'a') {
        puntuacion++;
    }

    // Pregunta 9
    const q9 = document.querySelector('input[name="q9"]:checked');
    if (q9 && q9.value === 'a') {
        puntuacion++;
    }

    // Pregunta 10
    const q10 = document.querySelector('input[name="q10"]:checked');
    if (q10 && q10.value === 'b') {
        puntuacion++;
    }

    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu puntuación es: ${puntuacion} de 10`;
    if (puntuacion === 10) {
        resultado.innerHTML += '<br>¡Felicidades! Conoces muy bien sobre vestidos de novia y su cuidado.';
    } else if (puntuacion >= 5) {
        resultado.innerHTML += '<br>¡Buen trabajo! Tienes un buen conocimiento sobre vestidos de novia.';
    } else {
        resultado.innerHTML += '<br>No te preocupes, ¡aún puedes aprender más sobre vestidos de novia!';
    }
}

function mostrarCuestionario() {
    document.getElementById('introduccion').style.display = 'none';
    document.getElementById('examen-container').style.display = 'block';
}

// Función para regresar a la página principal (introducción)
function regresarPrincipal() {
    document.getElementById('examen-container').style.display = 'none';
    document.getElementById('introduccion').style.display = 'block';
}