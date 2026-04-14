/**
 * KEYTECH STUDIO - MANIPULACIÓN DEL DOM
 * Archivo: app.js
 * Alumno: Gustavo Calzada García
 * Institución: ITSX
 */

document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. GESTIÓN DE TEMA (MODO CLARO/OSCURO)
    // ==========================================
    const btnToggle = document.getElementById("toggleModo");
    if (btnToggle) {
        btnToggle.addEventListener("click", () => {
            document.body.classList.toggle("light-mode");
            const esModoClaro = document.body.classList.contains("light-mode");
            btnToggle.textContent = esModoClaro ? "Modo Oscuro" : "Modo Claro";
        });
    }

    // ==========================================
    // 2. FILTRADO DE PROYECTOS (MOSTRAR/OCULTAR)
    // ==========================================
    const btnTodos = document.getElementById("btnFiltroTodos");
    const btnSistemas = document.getElementById("btnFiltroSistemas");
    // Uso de querySelectorAll para obtener todos los nodos de las tarjetas [cite: 10]
    const cards = document.querySelectorAll(".proy-card");

    if (btnSistemas) {
        btnSistemas.addEventListener("click", () => {
            cards.forEach(card => {
                // Se evalúa el atributo data-tipo para filtrar el DOM [cite: 8]
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
            cards.forEach(card => {
                // Se remueve la clase para restaurar la visibilidad original [cite: 8]
                card.classList.remove("oculto");
            });
        });
    }

    // ==========================================
    // 3. ACTUALIZACIÓN DINÁMICA DE ELEMENTOS
    // ==========================================
    const btnModificar = document.getElementById("btnModificarCard");
    
    if (btnModificar) {
        btnModificar.addEventListener("click", () => {
            // Selectores específicos mediante getElementById [cite: 10]
            const titulo = document.getElementById("tituloDinamico");
            const desc = document.getElementById("descDinamica");
            const img = document.getElementById("imgDinamica");

            // Modificación de nodos de texto y atributos sin recargar la página [cite: 8, 9]
            if (titulo && desc && img) {
                titulo.textContent = "Residencia Profesional 2026";
                titulo.style.color = "var(--primary)";
                desc.textContent = "Inicio del desarrollo de sistemas a nivel profesional.";
                img.src = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=180&fit=crop";
            }
        });
    }

    // ==========================================
    // 4. LÓGICA DE IDENTIDAD Y SALUDO
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
                btnSaludo.textContent = "Identidad";
                saludoMostrado = false;
            }
        });
    }

    // ==========================================
    // 5. VALIDACIÓN BÁSICA DE FORMULARIO
    // ==========================================
    const contactForm = document.getElementById("contactForm");
    
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
            const inputNombre = document.getElementById("nombre");
            const msgBox = document.getElementById("contactMessage");
            const msgError = document.getElementById("err-nombre");
            
            const nombre = inputNombre ? inputNombre.value.trim() : "";
            
            if (nombre === "") {
                if (inputNombre) inputNombre.classList.add("error");
                if (msgError) msgError.classList.add("visible");
            } else {
                if (inputNombre) inputNombre.classList.remove("error");
                if (msgError) msgError.classList.remove("visible");
                
                if (msgBox) {
                    msgBox.style.color = "var(--primary)";
                    msgBox.innerText = `Mensaje enviado correctamente. Gracias, ${nombre}.`;
                    
                    setTimeout(() => {
                        contactForm.reset();
                        msgBox.innerText = "";
                    }, 3000);
                }
            }
        });
    }
});
