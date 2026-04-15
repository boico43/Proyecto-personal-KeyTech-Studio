/**
 * KEYTECH STUDIO - LÓGICA DE MANIPULACIÓN DEL DOM
 * Alumno: Gustavo Calzada García
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GESTIÓN DE TEMA (MODO CLARO/OSCURO)
    const btnToggle = document.getElementById("toggleModo");
    if (btnToggle) {
        btnToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const esClaro = document.body.classList.contains("light-mode");
            btnToggle.textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
        });
    }

    // 2. FILTRADO DINÁMICO (Frontend, Backend, Fullstack)
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

    // 3. ACTUALIZACIÓN DINÁMICA DE NODO (Requisito B de la rúbrica)
    const btnModificar = document.getElementById("btnModificarCard");
    if (btnModificar) {
        btnModificar.addEventListener("click", () => {
            const titulo = document.getElementById("tituloDinamico");
            const desc = document.getElementById("descDinamica");
            const img = document.getElementById("imgDinamica");

            if (titulo && desc && img) {
                titulo.textContent = "Residencia Profesional 2026";
                titulo.style.color = "var(--primary)";
                desc.textContent = "Inicio del desarrollo de sistemas complejos a nivel profesional.";
                img.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80";
            }
        });
    }

    // 4. LÓGICA DE IDENTIDAD
    const btnSaludo = document.getElementById("btnSaludo");
    const mensajeDinamico = document.getElementById("mensajeDinamico");
    if (btnSaludo && mensajeDinamico) {
        btnSaludo.addEventListener("click", () => {
            mensajeDinamico.innerHTML = "Soy Gustavo Calzada García, estudiante de Ingeniería en Sistemas en el ITSX.";
        });
    }

    // 5. VALIDACIÓN DE FORMULARIO
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const campos = [
                { input: document.getElementById("nombre"), error: document.getElementById("err-nombre") },
                { input: document.getElementById("email"), error: document.getElementById("err-email") },
                { input: document.getElementById("mensaje-contacto"), error: document.getElementById("err-mensaje") }
            ];

            let esValido = true;

            campos.forEach(campo => {
                const vacio = campo.input.value.trim() === "";
                campo.input.classList.toggle("error", vacio);
                campo.error.classList.toggle("visible", vacio);
                if (vacio) esValido = false;
            });

            if (esValido) {
                const msgBox = document.getElementById("contactMessage");
                msgBox.style.color = "var(--primary)";
                msgBox.innerText = "Mensaje enviado correctamente.";
                setTimeout(() => {
                    contactForm.reset();
                    msgBox.innerText = "";
                }, 3000);
            }
        });
    }
});
