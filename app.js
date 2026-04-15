/**
 * KEYTECH STUDIO - MANIPULACIÓN DEL DOM
 * Alumno: Gustavo Calzada García
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. GESTIÓN DE TEMA (MODO CLARO/OSCURO)
    // ==========================================
    const btnToggle = document.getElementById("toggleModo");
    if (btnToggle) {
        btnToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const esClaro = document.body.classList.contains("light-mode");
            btnToggle.textContent = esClaro ? "Modo Oscuro" : "Modo Claro";
        });
    }

    // ==========================================
    // 2. FILTRADO DINÁMICO (Frontend, Backend, Fullstack)
    // ==========================================
    const botonesFiltro = document.querySelectorAll(".btn-filtro");
    const cards = document.querySelectorAll(".proy-card");

    if (botonesFiltro.length > 0 && cards.length > 0) {
        botonesFiltro.forEach(boton => {
            boton.addEventListener("click", () => {
                const categoria = boton.dataset.filter;
                
                cards.forEach(card => {
                    // Si el botón es "todos" o el atributo data-tipo de la tarjeta coincide, se muestra.
                    if (categoria === "todos" || card.dataset.tipo === categoria) {
                        card.classList.remove("oculto");
                    } else {
                        // De lo contrario, se oculta agregando la clase CSS.
                        card.classList.add("oculto");
                    }
                });
            });
        });
    }

    // ==========================================
    // 3. LÓGICA DE IDENTIDAD Y SALUDO
    // ==========================================
    const btnSaludo = document.getElementById("btnSaludo");
    const mensajeDinamico = document.getElementById("mensajeDinamico");
    let saludoMostrado = false;

    if (btnSaludo && mensajeDinamico) {
        btnSaludo.addEventListener("click", () => {
            if (!saludoMostrado) {
                mensajeDinamico.innerHTML = "Soy Gustavo Calzada García, estudiante de ISC en el ITSX.";
                btnSaludo.textContent = "Ocultar";
                saludoMostrado = true;
            } else {
                mensajeDinamico.innerHTML = "";
                btnSaludo.textContent = "¿Quién soy?";
                saludoMostrado = false;
            }
        });
    }

    // ==========================================
    // 4. VALIDACIÓN DE FORMULARIO DE CONTACTO
    // ==========================================
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

            // Validación de campos vacíos
            campos.forEach(campo => {
                if (campo.input) {
                    const vacio = campo.input.value.trim() === "";
                    if (vacio) {
                        campo.input.classList.add("error");
                        if (campo.error) campo.error.classList.add("visible");
                        esValido = false;
                    } else {
                        campo.input.classList.remove("error");
                        if (campo.error) campo.error.classList.remove("visible");
                    }
                }
            });

            // Simulación de envío exitoso
            if (esValido) {
                const msgBox = document.getElementById("contactMessage");
                if (msgBox) {
                    msgBox.style.color = "var(--primary)";
                    msgBox.innerText = "Mensaje enviado correctamente.";
                    
                    setTimeout(() => {
                        contactForm.reset();
                        msgBox.innerText = "";
                    }, 3000);
                }
            }
        });
    }
});
