// guardar user string y offset
let secretMsg = "";
let offset;

// DOM textarea
const textArea = document.getElementById("text-area");

// bool que chequea si usa encode o decode
let isEncoding = true;

// placeholder para textarea vacía
let taPlaceholderMsg;
let encDecMsg;
function setTAPlaceholder ()
{
  encDecMsg = (isEncoding ? "ENCODE" : "DECODE");
  taPlaceholderMsg = "1. Enter your #Key \n2. Type your message to "
  + encDecMsg + " here \n3. " + encDecMsg + " with button";
  textArea.placeholder = taPlaceholderMsg;
}
setTAPlaceholder();

// lógica encode/decode
const encDecBtn = document.getElementById("enc-dec-btn");
const magicEye = document.getElementById("h1-eye");

encDecBtn.addEventListener("click", function encodeDecode()
{
  // obtiene valores del usuario
  offset = parseInt(document.getElementById("user-offset").value);
  secretMsg = textArea.value;

  if (isEncoding)
  {
    encode();
  }
  else {
    decode();
  }
});

function encode ()
{
  if (offset > 0)
  {
    textArea.value = cipher.encode(offset,secretMsg);
  }
  else if (offset < 0)
  {
    offset *= -1;
    textArea.value = cipher.decode(offset,secretMsg);
  }
  encDecBtn.innerText = "Decode";
  magicEye.innerText = "㊀";
  cssToggler("theme2.css");
  isEncoding = false;
  setTAPlaceholder();
}

function decode ()
{
  if (offset > 0)
  {
    textArea.value = cipher.decode(offset,secretMsg);
  }
  else if (offset < 0)
  {
    offset *= -1;
    textArea.value = cipher.encode(offset,secretMsg);
  }
  encDecBtn.innerText = "Encode";
  magicEye.innerText = "◉";
  cssToggler("theme1.css");
  isEncoding = true;
  setTAPlaceholder();
}

function cssToggler(theme)
{
  document.getElementById("themeCSS").setAttribute("href", theme);
}

// lógica botón select/copy text
const copyBtn = document.getElementById("copy-to-clpb-btn");
copyBtn.addEventListener("click", function copyToClipboard(){
  let copyText = textArea;
  copyText.select();
  document.execCommand("copy");
});
