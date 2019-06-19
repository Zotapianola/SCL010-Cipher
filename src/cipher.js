window.cipher = {

  encode: (offset, secretMsg) => {

    // desmembra string y lo transforma en Array
    secretMsg = secretMsg.split('');
    let newPosition;

    // por cada vuelta, muestra última letra ya desplazada
    for (let i = 0; i < secretMsg.length; i++)
    {
      // en este momento no loopea
      newPosition = (secretMsg[i].charCodeAt() - 65 + offset) % 26 + 65;
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
      // en este momento no loopea
      newPosition = (secretMsg[i].charCodeAt() - 90 - offset) % 26 + 90;
      secretMsg[i] = String.fromCharCode(newPosition);
    }
    // juntar de nuevo
    secretMsg = secretMsg.join('');
    return secretMsg;
  }
};
