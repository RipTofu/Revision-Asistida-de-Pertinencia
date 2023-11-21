console.log("Mira papá, aprendí JavaScript en tres días :)")
//Para recibir información del formulario.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const submitButton = document.querySelector('.boton-estandar');
    submitButton.addEventListener('click', function (event) {
        event.preventDefault();
        captureAndLogFormData();
    });


    function captureAndLogFormData() {
        const formFields = form.querySelectorAll('.elemento-formulario');
        const formData = {};
        formFields.forEach(function (field) {
            formData[field.id] = field.value;
        });
        console.log('Captured Form Data:', formData);
    }
});

//Para el circulo de progreso:
document.addEventListener("DOMContentLoaded", function () {
    const formularioEscaneado = document.querySelector(".formulario-escaneado");
    const circuloDeProgreso = document.querySelector(".circulo-de-progreso");
    function updateProgress() {
        console.log('updateProgress function called');
        const totalFields = document.querySelectorAll('.elemento-formulario:required').length;
        const filledFields = document.querySelectorAll('.elemento-formulario:required:valid').length;
        console.log('Filled Fields:', filledFields);
        console.log('Total Fields:', totalFields);
        const percentage = (filledFields / totalFields) * 100;

        circuloDeProgreso.style.setProperty('--progress', percentage + '%');
        circuloDeProgreso.setAttribute('data-progress', `${Math.round(percentage)}%`);

        const gradientValue = `
            radial-gradient(closest-side, var(--celeste) 95%, transparent 80%),
            conic-gradient(var(--verdosoOscuro) ${percentage}%, var(--celeste) 0)`;
        circuloDeProgreso.style.background = gradientValue;

        //Para la cantidad de campos completados. Se actualizan los campos totales cada frame también, qué tanto.
        document.getElementById("camposCompletados").innerHTML = `Campos completados: ${filledFields}/${totalFields}`;

    }

    formularioEscaneado.addEventListener("input", updateProgress);

    updateProgress();
});


function evaluarArchivo() {
    var fileInput = document.querySelector('input[type="file"]');

    if (fileInput.files.length > 0) {
        var file = fileInput.files[0];

        if (file.type === 'application/pdf') {
            if (!tieneContrasena(file)) {
                document.getElementById('success-message').style.display = 'block';
                setTimeout(function () {
                    window.location.href = 'VerificacionManual.html';
                }, 3000);

                return;
            }
        }
    }
    alert('El archivo seleccionado no es del formato correcto. Por favor, seleccionar un archivo .PDF');
}

function tieneContrasena(file) {
    /* Se asume aquí que el archivo no tiene contraseña. La otra solución es meter una librería pesadísima.
        Lo arreglaré, pero no ahora. Valoro mi salud mental :) */
    return false;
}

//Cosas de login
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Lista previa de credenciales
        const credentialsList = [
            { username: "Warry", password: "gay" },
            { username: "Kristian", password: "homosexual" }
        ];
        //Evaluación de credenciales
        const validCredentials = credentialsList.some(cred =>
            cred.username === username && cred.password === password
        );

        if (validCredentials) {
            alert("Reconocido por el sistema correctamente.");
            // Redirect or perform other actions for successful login
        } else {
            alert("Credenciales inválidas. Intente nuevamente.");
            // Optionally, you can clear the input fields or take other actions
        }
    });
});