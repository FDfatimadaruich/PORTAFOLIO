// script.js
// script.js
document.getElementById('downloadBtn').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = 'https://github.com/FDfatimadaruich/PORTAFOLIO/blob/main/CVFATIMA%20(1).pdf'; // URL del PDF
    link.download = 'mi_cv.pdf'; // Nombre con el que se descargará el archivo
    document.body.appendChild(link); // Añadir el enlace al DOM
    link.click(); // Hacer clic en el enlace
    document.body.removeChild(link); // Eliminar el enlace del DOM
});


