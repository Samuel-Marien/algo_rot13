let rotNumber = document.querySelector('.userNumberInput');
let inputText = document.querySelector('.userTextInput');
let outputText = document.querySelector('.userTextOutput');


rotNumber.addEventListener('keyup', () => {
    console.log(rotNumber.value);
})

inputText.addEventListener('keyup', () => {
    outputText.value = rotX(inputText.value, parseInt(rotNumber.value));
})


function rotX(message, num) {
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


            //pour les lettres qui sorte du tableaux
            if (newLettrer + num > 90) {
                newLettrer -= (90 - num);
                newWords += String.fromCharCode(newLettrer + 64);


                // pour les autres
            } else {
                newLettrer = message[i].charCodeAt();
                newWords += String.fromCharCode(newLettrer + num);
            }

            // on affiche les lowercases
        } else if (message[i].charCodeAt() > 96 && message[i].charCodeAt() < 123) {
            newLettrer = message[i].charCodeAt();


            //pour les lettres qui sorte du tableaux
            if (newLettrer + num > 122) {
                newLettrer -= (122 - num);
                newWords += String.fromCharCode(newLettrer + 96);


                // pour les autres
            } else {
                newLettrer = message[i].charCodeAt();
                newWords += String.fromCharCode(newLettrer + num);
            }
        }
    }
    return newWords;
}






// function rotX(message) {
//     let newLettrer = 0;
//     let newWords = "";

//     for (let i = 0; i < message.length; i++) {
//         // on affiche les caracteres speciaux :
//         if (
//             message[i].charCodeAt() < 65 ||
//             (message[i].charCodeAt() < 97 && message[i].charCodeAt() > 90) ||
//             message[i].charCodeAt() > 122
//         ) {
//             newWords += message[i];
//             // on affiche les uppercases
//         } else if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
//             newLettrer = message[i].charCodeAt();


//             //pour les lettres qui sorte du tableaux
//             if (newLettrer + 13 > 90) {
//                 newLettrer -= 77;
//                 newWords += String.fromCharCode(newLettrer + 64);


//                 // pour les autres
//             } else {
//                 newLettrer = message[i].charCodeAt();
//                 newWords += String.fromCharCode(newLettrer + 13);
//             }

//             // on affiche les lowercases
//         } else if (message[i].charCodeAt() > 96 && message[i].charCodeAt() < 123) {
//             newLettrer = message[i].charCodeAt();
//             //pour les lettres qui sorte du tableaux
//             if (newLettrer + 13 > 122) {
//                 newLettrer -= 109;
//                 newWords += String.fromCharCode(newLettrer + 96);
//                 // pour les autres
//             } else {
//                 newLettrer = message[i].charCodeAt();
//                 newWords += String.fromCharCode(newLettrer + 13);
//             }
//         }
//     }
//     return newWords;
// }