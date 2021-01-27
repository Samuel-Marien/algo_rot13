function rot13(message) {
    let newLettrer = 0;
    let newWords = "";

    for (let i = 0; i < message.length; i++) {
        // on affiche les caracteres speciaux :
        if (
            message[i].charCodeAt() < 65 ||
            (message[i].charCodeAt() < 97 && message[i].charCodeAt() > 90) ||
            message[i].charCodeAt() > 122
        ) {
            newWords += message[i];
            // on affiche les uppercases
        } else if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
            newLettrer = message[i].charCodeAt();
            //pour les letres qui sorte du tableaux
            if (newLettrer + 13 > 90) {
                newLettrer -= 77;
                newWords += String.fromCharCode(newLettrer + 64);
                // pour les autres
            } else {
                newLettrer = message[i].charCodeAt();
                newWords += String.fromCharCode(newLettrer + 13);
            }

            // on affiche les lowercases
        } else if (message[i].charCodeAt() > 96 && message[i].charCodeAt() < 123) {
            newLettrer = message[i].charCodeAt();
            //pour les letres qui sorte du tableaux
            if (newLettrer + 13 > 122) {
                newLettrer -= 109;
                newWords += String.fromCharCode(newLettrer + 96);
                // pour les autres
            } else {
                newLettrer = message[i].charCodeAt();
                newWords += String.fromCharCode(newLettrer + 13);
            }
        }
    }
    return newWords;
}
// console.log(rot13("ABCDE"));
// console.log(rot13("abcde"));
// console.log(rot13("NOPQR"));
// console.log(rot13("nopqr"));
// console.log(rot13("TEST"));
// console.log(rot13("Test"));
// console.log(rot13("aLiba!ba"));
// console.log(rot13("aLi[]^ba!ba"));