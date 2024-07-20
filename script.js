// Función para encriptar el texto
function encriptar() {
  procesarTexto(3, 'Texto encriptado');
}

// Función para desencriptar el texto
function desencriptar() {
  procesarTexto(-3, 'Texto desencriptado');
}

// Función para procesar el texto
function procesarTexto(shift, mensaje) {
  const texto = document.getElementById('texto').value;

  if (!texto) {
    mostrarNotificacion('No hay nada escrito para procesar.');
    return;
  }

  if (!/^[a-z\s]*$/.test(texto)) {
    mostrarNotificacion('Solo se permiten letras minúsculas y sin acentos.');
    return;
  }

  const textoProcesado = cifradoCesar(texto, shift);

  document.getElementById('titulo-mensaje').textContent = mensaje;
  document.getElementById('parrafo').textContent = textoProcesado;
  document.getElementById('muñeco').style.display = 'none';
  document.getElementById('btn-copiar').style.display = 'block';
}

// Función para el cifrado César
function cifradoCesar(str, shift) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  shift = shift % 26; // Normaliza el shift
  if (shift < 0) shift += 26; // Asegura el shift positivo
  const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);

  return str.replace(/[a-z]/g, char => shiftedAlphabet[alphabet.indexOf(char)]);
}

// Función para copiar texto al portapapeles
function copiarTexto() {  
  navigator.clipboard.writeText(document.getElementById('parrafo').textContent)
    .then(() => mostrarNotificacion('Texto copiado al portapapeles.'))
    .catch(err => console.error('Error al copiar el texto: ', err));
}

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje) {
  if (Notification.permission === 'granted') {
    new Notification(mensaje);
  } else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        new Notification(mensaje);
      }
    });
  }
}

// Manejo de permisos de notificación al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission();
  }
});

// Funcionalidad para cambiar al modo oscuro al hacer clic en el logo
document.getElementById('logo').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});




  
  
