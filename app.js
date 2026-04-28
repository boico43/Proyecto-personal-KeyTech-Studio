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

   // 4. FORMULARIO DE CONTACTO - COMUNICACIÓN CLIENTE-SERVIDOR (Fetch API / POST)
const contactForm = document.getElementById("contactForm");
const contactMessage = document.getElementById("contactMessage");

if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Validación client-side
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

        if (!formularioValido) {
            contactMessage.textContent = "";
            return;
        }

        // Recopilar datos del formulario (equivalente a $_POST en PHP)
        const nombre = document.getElementById("nombre").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensaje = document.getElementById("mensaje").value.trim();

        const datosPOST = {
            nombre: nombre,
            email: email,
            mensaje: mensaje
        };

        contactMessage.textContent = "Enviando...";
        contactMessage.style.color = "var(--text-dim)";

        try {
            // Petición POST al servidor
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(datosPOST)
            });

            // Datos de respuesta del servidor (equivalente a $_SERVER en PHP)
            const servidorInfo = {
                status: response.status,
                statusText: response.statusText,
                contentType: response.headers.get("Content-Type"),
                url: response.url
            };

            const respuestaServidor = await response.json();

            console.log("=== DATOS ENVIADOS (POST) ===");
            console.log(datosPOST);
            console.log("=== RESPUESTA DEL SERVIDOR ===");
            console.log(servidorInfo);
            console.log(respuestaServidor);

            if (response.ok) {
                contactMessage.textContent = `¡Gracias por contactarme, ${nombre}! Tu mensaje fue recibido por el servidor. [ID: ${respuestaServidor.id} | Status: ${servidorInfo.status} ${servidorInfo.statusText}]`;
                contactMessage.style.color = "var(--primary)";
                contactForm.reset();
            } else {
                throw new Error("Error en la respuesta del servidor");
            }

        } catch (error) {
            contactMessage.textContent = "Error al conectar con el servidor. Intenta de nuevo.";
            contactMessage.style.color = "#ef4444";
            console.error("Error:", error);
        }
    });
}
