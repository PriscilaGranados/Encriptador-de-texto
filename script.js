const txtinput = document.querySelector(".txt_input");
const message = document.querySelector(".txt_message");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function printMessage(mensajeSecreto){
    message.value = mensajeSecreto;
    message.style.backgroundImage = "none";
    txtinput.value = "";
}

function checkAcento(texto){
    let validador = texto.match(/^[a-z]*$/);
    if(!validador || validador === 0) {
        alert("No se permiten acentos")
        return false;
        }
        else{
        return true;
        }
}

function encrypt(texto){
    if (checkAcento(texto)){
        let matrixKey = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        for (let i=0;i<5;i++){
            if(texto.includes(matrixKey[i][0])){
                texto = texto.replaceAll(matrixKey[i][0],matrixKey[i][1]);
            }         
        }
        return(texto);
    }
}

function btnEncrypt(){
    const textoEncriptado = encrypt(txtinput.value.toLowerCase());
    printMessage(textoEncriptado)
}

function decrypt(texto){
    if (checkAcento(texto)){
        let matrixKey = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        for (let i=0;i<5;i++){
            if(texto.includes(matrixKey[i][1])){
                texto = texto.replaceAll(matrixKey[i][1],matrixKey[i][0]);
            }         
        }
        return(texto);
    }
}

function btnDecrypt(){
    const textoDesencriptado = decrypt(txtinput.value.toLowerCase());
    printMessage(textoDesencriptado)
}

function btnCopy(){
    message.select();
    navigator.clipboard.writeText(message.value)
    message.value = "";
    alert("Texto Copiado");
}