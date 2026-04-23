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

    // 2. FILTRADO DE PROYECTOS
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

    // 4. VALIDACIÓN DE FORMULARIO COMPLETA
    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const campos = [
                { id: 'nombre', errorId: 'errorNombre' },
                { id: 'email', errorId: 'errorEmail' },
                { id: 'mensaje', errorId: 'errorMensaje' }
            ];

            let formularioValido = true;

            campos.forEach(campo => {
                const input = document.getElementById(campo.id);
                const errorSpan = document.getElementById(campo.errorId);
                
                if (input.value.trim() === "") {
                    input.classList.add('error');
                    errorSpan.classList.add('visible');
                    formularioValido = false;
                } else {
                    input.classList.remove('error');
                    errorSpan.classList.remove('visible');
                }
            });

            if (formularioValido) {
                const nombre = document.getElementById("nombre").value;
                contactMessage.textContent = `¡Gracias ${nombre}, mensaje enviado con éxito!`;
                contactForm.reset();
            } else {
                contactMessage.textContent = "";
            }
        });
    }
});
