window.cipher = {

  encode: (offset, secretMsg) => {

    // desmembra string y lo transforma en Array
    secretMsg = secretMsg.split('');
    let newPosition;
    let charNum;

    // por cada vuelta, muestra última letra ya desplazada
    for (let i = 0; i < secretMsg.length; i++)
    {
      charNum = secretMsg[i].charCodeAt();
      // mayúsculas
      if (charNum >= 65 && charNum <= 90)
      {
          newPosition = (charNum - 65 + offset) % 26 + 65;
      }
      // minúsculas
      else if (charNum >= 97 && charNum <= 122)
      {
          newPosition = (charNum - 97 + offset) % 26 + 97;
      }
      // "Ñ" por "N"
      else if (charNum == 209)
      {
        newPosition = (78 - 65 + offset) % 26 + 65;
      }
      // "ñ" por "n"
      else if (charNum == 241)
      {
        newPosition = (110 - 97 + offset) % 26 + 97;
      }
      // números y algunos caracteres raros
      else if (charNum >= 33 && charNum <= 64){
        newPosition = (charNum - 33 + offset) % 32 + 33;
      }
      // barra espaciadora
      // a) offset positivo
      else if (charNum == 32)
      {
        newPosition = 128;
      }
      // b) offset negativo
      else if (charNum == 128)
      {
        newPosition = 32;
      }
      secretMsg[i] = String.fromCharCode(newPosition);
    }
    // juntar de nuevo
    secretMsg = secretMsg.join('');
    return secretMsg;
  },
  decode: (offset,secretMsg) => {
    // desmembra string y lo transforma en Array
    secretMsg = secretMsg.split('');

    let newPosition;
    let charNum;

    // por cada vuelta, muestra última letra ya desplazada
    for (let i = 0; i < secretMsg.length; i++)
    {
      charNum = secretMsg[i].charCodeAt();
      // mayúsculas
      if (charNum >= 65 && charNum <= 90)
      {
          newPosition = (charNum - 90 - offset) % 26 + 90;
      }
      // minúsculas
      else if (charNum >= 97 && charNum <= 122)
      {
        newPosition = (charNum - 122 - offset) % 26 + 122;
      }
      // números y algunos caracteres raros
      else if (charNum >= 33 && charNum <= 64){
        newPosition = (charNum - 64 - offset) % 32 + 64;
      }
      // barra espaciadora
      // a) offset positivo
      else if (charNum == 128)
      {
        newPosition = 32;
      }
      // b) offset negativo
      else if (charNum == 32)
      {
        newPosition = 128;
      }
      secretMsg[i] = String.fromCharCode(newPosition);
    }
    secretMsg = secretMsg.join('');
    return secretMsg;
  }
};
