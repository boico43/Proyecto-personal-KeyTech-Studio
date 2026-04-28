/**
 * KEYTECH STUDIO - COMUNICACIÓN CLIENTE-SERVIDOR
 * Alumno: Gustavo Calzada García
 * Actividad 06 - 2DA EVA
 */

document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
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

            if (!formularioValido) {
                contactMessage.textContent = "";
                return;
            }

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
                const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datosPOST)
                });

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

});
