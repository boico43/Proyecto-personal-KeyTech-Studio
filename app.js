/**
 * KEYTECH STUDIO - MANIPULACIÓN DEL DOM
 * Archivo: app.js
 * Alumno: Gustavo Calzada García
 * Institución: ITSX
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. GESTIÓN DE TEMA (MODO CLARO/OSCURO)
    const btnToggle = document.getElementById("toggleModo");
    if (btnToggle) {
        btnToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const esModoClaro = document.body.classList.contains("light-mode");
            btnToggle.textContent = esModoClaro ? "Modo Oscuro" : "Modo Claro";
        });
    }

    // 2. FILTRADO DE PROYECTOS (MOSTRAR/OCULTAR)
    const btnTodos = document.getElementById("btnFiltroTodos");
    const btnSistemas = document.getElementById("btnFiltroSistemas");
    const cards = document.querySelectorAll(".proy-card");

    if (btnSistemas) {
        btnSistemas.addEventListener("click", () => {
            cards.forEach(card => {
                if (card.dataset.tipo !== "sistemas") {
                    card.classList.add("oculto");
                } else {
                    card.classList.remove("oculto");
                }
            });
        });
    }

    if (btnTodos) {
        btnTodos.addEventListener("click", () => {
            cards.forEach(card => card.classList.remove("oculto"));
        });
    }

    // 3. ACTUALIZACIÓN DINÁMICA DE ELEMENTOS
    const btnModificar = document.getElementById("btnModificarCard");
    
    if (btnModificar) {
        btnModificar.addEventListener("click", () => {
            const titulo = document.getElementById("tituloDinamico");
            const desc = document.getElementById("descDinamica");
            const img = document.getElementById("imgDinamica");

            if (titulo && desc && img) {
                titulo.textContent = "Residencia Profesional 2026";
                titulo.style.color = "var(--primary)";
                desc.textContent = "Inicio del desarrollo de sistemas a nivel profesional.";
                img.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=180&fit=crop";
            }
        });
    }

    // 4. LÓGICA DE IDENTIDAD Y SALUDO
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
                btnSaludo.textContent = "Identidad";
                saludoMostrado = false;
            }
        });
    }

    // 5. VALIDACIÓN ROBUSTA DE FORMULARIO
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            // Campos de texto
            const inputNombre = document.getElementById("nombre");
            const inputEmail = document.getElementById("email");
            const inputMensaje = document.getElementById("mensaje-contacto");
            
            // Mensajes de error
            const errNombre = document.getElementById("err-nombre");
            const errEmail = document.getElementById("err-email");
            const errMensaje = document.getElementById("err-mensaje");
            const msgBox = document.getElementById("contactMessage");
            
            let esValido = true;
            
            // Validar Nombre
            if (inputNombre.value.trim() === "") {
                inputNombre.classList.add("error");
                errNombre.classList.add("visible");
                esValido = false;
            } else {
                inputNombre.classList.remove("error");
                errNombre.classList.remove("visible");
            }

            // Validar Correo
            if (!inputEmail.value.includes("@") || inputEmail.value.trim() === "") {
                inputEmail.classList.add("error");
                errEmail.classList.add("visible");
                esValido = false;
            } else {
                inputEmail.classList.remove("error");
                errEmail.classList.remove("visible");
            }

            // Validar Mensaje
            if (inputMensaje.value.trim() === "") {
                inputMensaje.classList.add("error");
                errMensaje.classList.add("visible");
                esValido = false;
            } else {
                inputMensaje.classList.remove("error");
                errMensaje.classList.remove("visible");
            }
            
            // Si todo está correcto, simular envío
            if (esValido) {
                msgBox.style.color = "var(--primary)";
                msgBox.innerText = `Mensaje enviado correctamente. Gracias, ${inputNombre.value.trim()}.`;
                
                setTimeout(() => {
                    contactForm.reset();
                    msgBox.innerText = "";
                }, 3000);
            }
        });
    }
});
