/**
 * KEYTECH STUDIO - COMUNICACIÓN CLIENTE-SERVIDOR
 * Alumno: Gustavo Calzada García
 * Matrícula: 217003063
 * Asignatura: Programación Web
 * Actividad 06 - 2DA Evaluación
 * Profesor: Almanza Mar Julio Cesar
 */

document.addEventListener("DOMContentLoaded", () => {

    // ─── INTEGRACIÓN CON FORMULARIO DE CONTACTO ───────────────────────────────
    // Se obtienen referencias al formulario y al elemento de respuesta del DOM
    const contactForm = document.getElementById("contactForm");
    const contactMessage = document.getElementById("contactMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            // Se previene el comportamiento por defecto del formulario (recarga de página)
            e.preventDefault();

            // ─── VALIDACIÓN CLIENT-SIDE ────────────────────────────────────────
            // Se verifica que los campos obligatorios no estén vacíos antes de enviar
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

            // ─── EQUIVALENTE A $_POST ──────────────────────────────────────────
            // Se recopilan los datos del formulario que el cliente enviará al servidor.
            // En PHP esto se accedería mediante $_POST['nombre'], $_POST['email'], etc.
            const nombre = document.getElementById("nombre").value.trim();
            const email = document.getElementById("email").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            const datosPOST = {
                nombre: nombre,   // Equivalente a $_POST['nombre']
                email: email,     // Equivalente a $_POST['email']
                mensaje: mensaje  // Equivalente a $_POST['mensaje']
            };

            contactMessage.textContent = "Enviando...";
            contactMessage.style.color = "var(--text-dim)";

            try {
                // ─── PETICIÓN POST AL SERVIDOR ────────────────────────────────
                // Se realiza una petición HTTP con método POST hacia el servidor.
                // El cuerpo de la petición contiene los datos del formulario en formato JSON,
                // equivalente a cuando PHP recibe datos mediante $_POST.
                const response = await fetch("https://keytech-studio.duckdns.org/api/mensajes", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datosPOST)
                });

                // ─── EQUIVALENTE A $_SERVER ────────────────────────────────────
                // Se extraen datos del objeto de respuesta del servidor.
                // En PHP estos datos se obtendrían mediante $_SERVER['SERVER_PROTOCOL'],
                // $_SERVER['REQUEST_URI'], $_SERVER['CONTENT_TYPE'], etc.
                const servidorInfo = {
                    status: response.status,           // Equivalente a $_SERVER['REDIRECT_STATUS']
                    statusText: response.statusText,   // Código de estado HTTP del servidor
                    contentType: response.headers.get("Content-Type"), // Tipo de contenido
                    url: response.url                  // Equivalente a $_SERVER['REQUEST_URI']
                };

                // Se procesa la respuesta JSON del servidor
                const respuestaServidor = await response.json();

                // ─── LOGS DE DEPURACIÓN ────────────────────────────────────────
                console.log("=== DATOS ENVIADOS (POST) ===");
                console.log(datosPOST);
                console.log("=== INFORMACIÓN DEL SERVIDOR ($_SERVER) ===");
                console.log(servidorInfo);
                console.log("=== RESPUESTA DEL SERVIDOR ===");
                console.log(respuestaServidor);

                // ─── RESPUESTA PERSONALIZADA ───────────────────────────────────
                // Si el servidor responde con éxito (status 200-299),
                // se muestra un mensaje personalizado con el nombre del usuario,
                // equivalente a: echo "Gracias por contactarme, " . $_POST['nombre'];
                if (response.ok) {
                    contactMessage.textContent = `¡Gracias por contactarme, ${nombre}! Tu mensaje fue recibido. Nos comunicaremos contigo lo antes posible.`;
                    contactMessage.style.color = "var(--primary)";
                    contactForm.reset();
                } else {
                    throw new Error("Error en la respuesta del servidor");
                }

            } catch (error) {
                // Manejo de errores de conexión o respuesta inesperada del servidor
                contactMessage.textContent = "Error al conectar con el servidor. Intenta de nuevo.";
                contactMessage.style.color = "#ef4444";
                console.error("Error:", error);
            }
        });
    }

});
