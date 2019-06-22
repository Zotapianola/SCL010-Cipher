// guardar user string y offset
let secretMsg = "";
let offset;

// DOM textarea
const textArea = document.getElementById("text-area");

// bool que chequea si usa encode o decode
let isEncoding = true;

// placeholder para textarea vacía
let taPlaceholderMsg;
function setTAPlaceholder ()
{
  taPlaceholderMsg = "1. Enter your #Key \n2. Type your message to "
  + (isEncoding ? "ENCODE" : "DECODE") + " here \n3. Encode with button";
  textArea.placeholder = taPlaceholderMsg;
}
setTAPlaceholder();

// lógica encode/decode
const encDecBtn = document.getElementById("enc-dec-btn");
const magicEye = document.getElementById("h1-eye");

encDecBtn.addEventListener("click", function encodeDecode()
{
  if (isEncoding)
  {
    encode();
    encDecBtn.innerText = "Code";
    magicEye.innerText = "㊀";
    cssToggler("theme2.css");
    isEncoding = false;
    setTAPlaceholder();
  }
  else {
    decode();
    encDecBtn.innerText = "Decode";
    magicEye.innerText = "◉";
    cssToggler("theme1.css");
    isEncoding = true;
    setTAPlaceholder();
  }
});

// lógica botón select/copy text
const copyBtn = document.getElementById("copy-to-clpb-btn");
copyBtn.addEventListener("click", function copyToClipboard(){
  let copyText = textArea;
  copyText.select();
  document.execCommand("copy");
});

function encode ()
{
  // obtiene valores del usuario
  offset = parseInt(document.getElementById("user-offset").value);
  secretMsg = textArea.value;

  // muestra resultado decodificado
  textArea.value = cipher.encode(offset,secretMsg);
}

function decode ()
{
  // obtiene valores del usuario
  offset = parseInt(document.getElementById("user-offset").value);
  secretMsg = textArea.value;

  // muestra resultado decodificado
  textArea.value = cipher.decode(offset,secretMsg);
}

function cssToggler(theme)
{
  document.getElementById("themeCSS").setAttribute("href", theme);
}
