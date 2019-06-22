window.cipher = {

  encode: (offset, secretMsg) => {

    // desmembra string y lo transforma en Array
    secretMsg = secretMsg.split('');
    let newPosition;

    // por cada vuelta, muestra última letra ya desplazada
    for (let i = 0; i < secretMsg.length; i++)
    {
      if (secretMsg[i].charCodeAt() >= 65 && secretMsg[i].charCodeAt() <= 90)
      {
          newPosition = (secretMsg[i].charCodeAt() - 65 + offset) % 26 + 65;
      }
      else if(secretMsg[i].charCodeAt() >= 97 && secretMsg[i].charCodeAt() <= 122)
      {
          newPosition = (secretMsg[i].charCodeAt() - 97 + offset) % 26 + 97;
      }
      secretMsg[i] = String.fromCharCode(newPosition);
    }
    // juntar de nuevo
    secretMsg = secretMsg.join('');
    return secretMsg;


  },
  decode: (offset,secretMsg) => {
    let newPosition;

    // desmembra string y lo transforma en Array
    secretMsg = secretMsg.split('');

    // por cada vuelta, muestra última letra ya desplazada
    for (let i = 0; i < secretMsg.length; i++)
    {
      if (secretMsg[i].charCodeAt() >= 65 && secretMsg[i].charCodeAt() <= 90)
      {
          newPosition = (secretMsg[i].charCodeAt() - 90 - offset) % 26 + 90;
      }
      else if (secretMsg[i].charCodeAt() >= 97 && secretMsg[i].charCodeAt() <= 122)
      {
        newPosition = (secretMsg[i].charCodeAt() - 122 - offset) % 26 + 122;
      }
      secretMsg[i] = String.fromCharCode(newPosition);
    }
    // juntar de nuevo
    secretMsg = secretMsg.join('');
    return secretMsg;
  }
};
