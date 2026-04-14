/**
 * ACTIVIDAD 03 - MANIPULACIÓN DEL DOM
 * Proyecto: KeyTech Studio
 * Alumno: Gustavo Calzada
 * * Lógica para filtrado de proyectos y modificación dinámica de elementos.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORES DE ELEMENTOS (Uso de querySelector e getElementById) [cite: 10, 29]
    const btnAll = document.getElementById('btn-filter-all');
    const btnSys = document.getElementById('btn-filter-sys');
    const btnUpdate = document.getElementById('btn-update-feat');
    const projectCards = document.querySelectorAll('.project-card');

    // 2. LÓGICA DE MOSTRAR/OCULTAR (Punto 2.a de la actividad) 
    // Función para filtrar por categoría usando classList
    const filtrarProyectos = (categoria) => {
        projectCards.forEach(card => {
            if (categoria === 'all' || card.getAttribute('data-category') === categoria) {
                card.classList.remove('hidden'); // Manipulación del DOM para mostrar 
            } else {
                card.classList.add('hidden');    // Manipulación del DOM para ocultar 
            }
        });
    };

    // Event Listeners para los botones de filtrado 
    btnAll.addEventListener('click', () => filtrarProyectos('all'));
    btnSys.addEventListener('click', () => filtrarProyectos('systems'));

    // 3. CAMBIAR TEXTO E IMAGEN (Punto 2.b de la actividad) 
    // Modificación dinámica de un elemento específico sin recargar la página
    btnUpdate.addEventListener('click', () => {
        const titulo = document.getElementById('title-featured');
        const imagen = document.getElementById('img-featured');

        // Modificamos el contenido (textContent) y el atributo (src) 
        titulo.textContent = "🚀 Próximamente: Residencia Profesional";
        imagen.src = "https://via.placeholder.com/300x200/22d3ee/0f172a?text=KeyTech+2026";
        
        // Cambio de estilo directo para resaltar la manipulación del DOM 
        titulo.style.color = "var(--primary)";
    });

    // 4. LÓGICA PREVIA (Modo Oscuro y Saludo que ya tenías)
    const btnToggle = document.getElementById("toggleModo");
    if (btnToggle) {
        btnToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const modoActivo = document.body.classList.contains("light-mode");
            btnToggle.textContent = modoActivo ? "🌙 Oscuro" : "☀️ Claro";
        });
    }

    const btnSaludo = document.getElementById("btnSaludo");
    const mensajeDinamico = document.getElementById("mensajeDinamico");
    if (btnSaludo) {
        btnSaludo.addEventListener("click", () => {
            mensajeDinamico.innerHTML = "👋 Soy <strong>Gustavo</strong>, estudiante de ISC en el ITSX. Desarrollo soluciones web y servicios tecnológicos.";
            btnSaludo.style.display = "none"; // Ejemplo extra de manipulación de estilo
        });
    }
});
