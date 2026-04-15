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
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
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

    // 4. LÓGICA DEL BOTÓN PRESIONAME CON FRASES MOTIVADORAS (INCISO B)
    const btnPresioname = document.getElementById("btnPresioname");
    const textoDinamico = document.getElementById("textoDinamico");
    
    const frasesMotivadoras = [
        "«El único modo de hacer un gran trabajo es amar lo que haces.» — Steve Jobs",
        "«La tecnología es mejor cuando une a la gente.» — Matt Mullenweg",
        "«No te detengas hasta que estés orgulloso de tu esfuerzo.»",
        "«La innovación es lo que distingue a un líder de un seguidor.» — Steve Jobs",
        "«Tu capacidad de aprender es tu activo más valioso.»"
    ];

    if (btnPresioname && textoDinamico) {
        btnPresioname.addEventListener("click", () => {
            const azar = Math.floor(Math.random() * frasesMotivadoras.length);
            // Manipulación del DOM mediante textContent
            textoDinamico.textContent = frasesMotivadoras[azar];
        });
    }
});
