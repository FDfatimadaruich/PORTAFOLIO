// script.js
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Cambia 'ruta/a/tu/cv.pdf' a la ruta real de tu archivo PDF
    const link = document.createElement('a');
    link.href = 'PORTAFOLIO/CVFATIMA.pdf'; // Ruta del archivo PDF
    link.download = 'CVFATIMA.pdf'; // Nombre con el que se descargará el archivo
    document.body.appendChild(link); // Añadir el enlace al DOM
    link.click(); // Hacer clic en el enlace
    document.body.removeChild(link); // Eliminar el enlace del DOM
});
