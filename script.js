console.log("script cargado.")
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

    // Update the progress based on the number of filled fields
    function updateProgress() {
        const totalFields = document.querySelectorAll('.elemento-formulario:required').length;
        const filledFields = document.querySelectorAll('.elemento-formulario:required:valid').length;
        const percentage = (filledFields / totalFields) * 100;

        // Update the --progress variable and content
        circuloDeProgreso.style.setProperty('--progress', percentage + '%');
        //Update Data-progress
        circuloDeProgreso.setAttribute('data-progress', `${Math.round(percentage)}%`);

        // Update the conic-gradient with the calculated percentage
        const gradientValue = `
            radial-gradient(closest-side, var(--celeste) 95%, transparent 80%),
            conic-gradient(var(--verdosoOscuro) ${percentage}%, var(--celeste) 0)`;
        circuloDeProgreso.style.background = gradientValue;

        // Color segun porcentaje
        const color = calculateColor(percentage);
        circuloDeProgreso.style.borderColor = color;
    }

    // Attach the updateProgress function to the form's input events
    formularioEscaneado.addEventListener("input", updateProgress);

    // Initial update when the DOM is loaded
    updateProgress();
});