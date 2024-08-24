// Referencia al elemento de la imagen
const imageElement = document.querySelector('.imagen');

// Funciones de encriptación y desencriptación
function encrypt(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}

// Referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const resultText = document.getElementById('resultText');
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const copyBtn = document.getElementById('copyBtn');

// Eventos de los botones
encryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text) {
        resultText.textContent = encrypt(text);
        imageElement.style.display = 'none'; // Oculta la imagen
    } else {
        resultText.textContent = 'Ningún mensaje fue encontrado';
    }
});

decryptBtn.addEventListener('click', () => {
    const text = inputText.value.toLowerCase();
    if (text) {
        resultText.textContent = decrypt(text);
        imageElement.style.display = 'none'; // Oculta la imagen
    } else {
        resultText.textContent = 'Ningún mensaje fue encontrado';
    }
});

copyBtn.addEventListener('click', () => {
    const text = resultText.textContent;
    if (text !== 'Ningún mensaje fue encontrado') {
        navigator.clipboard.writeText(text);
        alert('Texto copiado al portapapeles');
    }
});