// guardar user string y offset
let secretMsg = "";
let offset;

// DOM textarea
const textArea = document.getElementById("textarea");

// bool que chequea si usa encode o decode
let isEncoding = true;

// lógica encode/decode
const encDecBtn = document.getElementById("encDecB");
const magicEye = document.getElementById("h1Eye");
const tri = document.getElementById('triangle');
encDecBtn.addEventListener("click", function encodeDecode()
{
  if (isEncoding)
  {
    encode();
    encDecBtn.innerText = "Code";
    magicEye.innerText = "㊀";
    cssToggler("theme2.css");
    tri.innerText = "▼";
    isEncoding = false;
  }
  else {
    decode();
    encDecBtn.innerText = "Decode";
    magicEye.innerText = "◉";
    cssToggler("theme1.css");
    tri.innerText = "▲";
    isEncoding = true;
  }
});

// lógica botón select/copy text
const copyBtn = document.getElementById("copyToClpB");
copyBtn.addEventListener("click", function copyToClipboard(){
  let copyText = textArea;
  copyText.select();
  document.execCommand("copy");
});

function encode ()
{
  // obtiene valores del usuario
  offset = parseInt(document.getElementById("userOffset").value);
  secretMsg = textArea.value.toUpperCase();

  // muestra resultado decodificado
  textArea.value = cipher.encode(offset,secretMsg);
}

function decode ()
{
  // obtiene valores del usuario
  offset = parseInt(document.getElementById("userOffset").value);
  secretMsg = textArea.value.toUpperCase();

  // muestra resultado decodificado
  textArea.value = cipher.decode(offset,secretMsg);
}

function cssToggler(theme)
{
  document.getElementById("themeCSS").setAttribute("href", theme);
}
