/**
 * KEYTECH STUDIO - GESTOR DE MENSAJES
 * Alumno: Gustavo Calzada García
 * Matrícula: 217003063
 * Asignatura: Programación Web
 * Actividad 07 - 2DA Evaluación
 * Profesor: Almanza Mar Julio Cesar
 */

class GestorMensajes {
    // Propiedades privadas
    #titulo;
    #contenido;
    #fecha;

    // Constructor que inicializa los datos
    constructor(titulo, contenido) {
        this.#titulo = titulo;
        this.#contenido = contenido;
        this.#fecha = new Date().toLocaleDateString('es-MX', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    // Método público guardar() - almacena en localStorage
    guardar() {
        const mensaje = {
            titulo: this.#titulo,
            contenido: this.#contenido,
            fecha: this.#fecha
        };

        // Recuperar mensajes existentes o iniciar array vacío
        const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes') || '[]');
        mensajesGuardados.push(mensaje);
        localStorage.setItem('mensajes', JSON.stringify(mensajesGuardados));

        console.log('Mensaje guardado:', mensaje);
        return mensaje;
    }

    // Método público mostrar() - devuelve contenido formateado en HTML
    mostrar() {
        return `
            <article class="mensaje-card">
                <h3>${this.#titulo}</h3>
                <p>${this.#contenido}</p>
                <small>${this.#fecha}</small>
            </article>
        `;
    }
}

// Integración con el formulario de contacto de KeyTech Studio
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            const nombre = document.getElementById("nombre").value.trim();
            const mensaje = document.getElementById("mensaje").value.trim();

            if (nombre && mensaje) {
                // Crear instancia de GestorMensajes
                const gestor = new GestorMensajes(
                    `Mensaje de ${nombre}`,
                    mensaje
                );

                // Guardar en localStorage
                gestor.guardar();

                // Mostrar en consola el HTML formateado
                console.log('=== HTML GENERADO POR mostrar() ===');
                console.log(gestor.mostrar());
            }
        });
    }
});
