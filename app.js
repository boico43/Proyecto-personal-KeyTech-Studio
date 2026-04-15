/**
 * KEYTECH STUDIO - MANIPULACIÓN DEL DOM
 * Alumno: Gustavo Calzada García
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. MODO CLARO/OSCURO
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
                    card.classList.remove("oculto");
                } else {
                    card.classList.add("oculto");
                }
            });
        });
    });

    // 3. SALUDO INICIAL
    const btnSaludo = document.getElementById("btnSaludo");
    const mensajeDinamico = document.getElementById("mensajeDinamico");
    if (btnSaludo && mensajeDinamico) {
        btnSaludo.addEventListener("click", () => {
            mensajeDinamico.innerHTML = "Soy Gustavo Calzada García, estudiante de ISC en el ITSX.";
        });
    }

    // 4. LÓGICA DEL BOTÓN PRESIONAME (INCISO B)
    const btnPresioname = document.getElementById("btnPresioname");
    const textoDinamico = document.getElementById("textoDinamico");
    
    const frases = [
        "¡Sistemas es la mejor carrera!",
        "Compilado con éxito.",
        "En mi máquina sí funciona.",
        "El DOM ha sido manipulado.",
        "¡Lograste la Actividad 03!"
    ];

    if (btnPresioname && textoDinamico) {
        btnPresioname.addEventListener("click", () => {
            const azar = Math.floor(Math.random() * frases.length);
            // Manipulación de nodo P mediante textContent
            textoDinamico.textContent = frases[azar];
        });
    }
});
