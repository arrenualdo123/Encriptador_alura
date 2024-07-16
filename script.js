function encriptar() {
    procesarTexto(3, 'Texto encriptado');
  }
  
  function desencriptar() {
    procesarTexto(-3, 'Texto desencriptado');
  }
  
  function procesarTexto(shift, mensaje) {
    const texto = document.getElementById('texto').value;
  
    if (!texto) {
      alert('No hay nada escrito para procesar.');
      return;
    }
  
    if (!/^[a-z\s]*$/.test(texto)) {
      alert('Solo se permiten letras minúsculas y sin acentos.');
      return;
    }
  
    const textoProcesado = cifradoCesar(texto, shift);
  
    document.getElementById('titulo-mensaje').textContent = mensaje;
    document.getElementById('parrafo').textContent = textoProcesado;
    document.getElementById('muñeco').style.display = 'none';
    document.getElementById('btn-copiar').style.display = 'block';
  }
  
  function cifradoCesar(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const shiftedAlphabet = alphabet.slice(shift) + alphabet.slice(0, shift);
    
    return str.replace(/[a-z]/g, char => shiftedAlphabet[alphabet.indexOf(char)]);
  }
  
  function copiarTexto() {
    navigator.clipboard.writeText(document.getElementById('parrafo').textContent)
      .then(() => alert('Texto copiado al portapapeles.'))
      .catch(err => console.error('Error al copiar el texto: ', err));
  }
  
  
