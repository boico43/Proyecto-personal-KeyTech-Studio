/**
 * KEYTECH STUDIO - MANIPULACIÓN DEL DOM
 * Alumno: Gustavo Calzada García
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MODO CLARO / OSCURO
    const btnToggle = document.getElementById("toggleModo");
    if (btnToggle) {
        btnToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            btnToggle.textContent = document.body.classList.contains("light-mode") ? "Modo Oscuro" : "Modo Claro";
        });
    }

    // 2. FILTRADO DE PROYECTOS (INCISO A)
    const botonesFiltro = document.querySelectorAll(".btn-filtro");
    const cards = document.querySelectorAll(".proy-card");

    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.dataset.filter;
            cards.forEach(card => {
                if (categoria === "todos" || card.dataset.tipo === categoria) {
                    card.style.display = "block"; // Muestra el nodo
                } else {
                    card.style.display = "none";  // Oculta el nodo
                }
            });
        });
    });

    // 3. SALUDO DINÁMICO
    const btnSaludo = document.getElementById("btnSaludo");
    const mensajeDinamico = document.getElementById("mensajeDinamico");
    if (btnSaludo && mensajeDinamico) {
        btnSaludo.addEventListener("click", () => {
            mensajeDinamico.innerHTML = "¡Hola! Soy Gustavo Calzada García, estudiante de ISC en el ITSX.";
        });
    }

    // 4. LÓGICA DEL BOTÓN PRESIONAME (INCISO B)
    const btnPresioname = document.getElementById("btnPresioname");
    const textoDinamico = document.getElementById("textoDinamico");
    
    const frases = [
        "¡Sistemas es la mejor carrera!",
        "Compilado con éxito. 🚀",
        "En mi máquina sí funciona. 💻",
        "El DOM ha sido manipulado correctamente. ✨",
        "¡Lograste la Actividad 03! 🔥"
    ];

    if (btnPresioname && textoDinamico) {
        btnPresioname.addEventListener("click", () => {
            const azar = Math.floor(Math.random() * frases.length);
            // Actualización del contenido del nodo mediante textContent
            textoDinamico.textContent = frases[azar];
        });
    }

    // 5. MANIPULACIÓN DEL FORMULARIO
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const nombre = document.getElementById("nombre").value;
            const msgBox = document.getElementById("contactMessage");
            if (nombre && msgBox) {
                msgBox.innerText = `¡Gracias ${nombre}! Mensaje enviado correctamente.`;
                contactForm.reset();
            }
        });
    }
});
