const categorias = {
    ciencias: 0,
    tecnologia: 0,
    humanidades: 0,
    arte: 0,
    educacion: 0,
    salud: 0,
    seguridad: 0
};

const carreras = {
    ciencias: "Biología, Física, Química, Medicina",
    tecnologia: "Ingeniería, Desarrollo de Software, Diseño de Juegos",
    humanidades: "Historia, Filosofía, Literatura, Antropología",
    arte: "Bellas Artes, Diseño Gráfico, Música, Teatro",
    educacion: "Pedagogía, Educación Especial, Psicología",
    salud: "Medicina, Enfermería, Psicología de la Salud",
    seguridad: "Derecho, Criminología, Seguridad Pública"
};

function calcularResultado() {
    const preguntas = document.querySelectorAll('.question');
    
    // Reiniciar las categorías
    for (let categoria in categorias) {
        categorias[categoria] = 0;
    }

    // Calcular puntos
    preguntas.forEach(pregunta => {
        const categoria = pregunta.getAttribute('data-category');
        const respuesta = pregunta.querySelector('input[type="radio"]:checked');
        if (respuesta) {
            categorias[categoria] += parseInt(respuesta.value);
        }
    });

    // Determinar la categoría con más puntos
    let maxCategoria = '';
    let maxPuntos = 0;

    for (let categoria in categorias) {
        if (categorias[categoria] > maxPuntos) {
            maxPuntos = categorias[categoria];
            maxCategoria = categoria;
        }
    }

    // Mostrar el resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `Tu carrera recomendada es: ${carreras[maxCategoria]}`;
}