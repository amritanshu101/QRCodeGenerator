let input = document.getElementById('inputText');
let img = document.getElementById('image');

function generateqr() {
    img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
}
