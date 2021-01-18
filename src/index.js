// function rode13(string) {
//   let newLettrer = 0;
//   let newWords = "";
//   let cpt = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i].charCodeAt() > 64 && string[i].charCodeAt() < 91) {
//       newLettrer = string[i].charCodeAt();
//       if (newLettrer + 13 > 90) {
//         cpt++;
//         newLettrer -= 77;
//         newWords += String.fromCharCode(newLettrer + 64);
//       } else {
//         newWords += String.fromCharCode(newLettrer + 13);
//       }
//     } else if (string[i].charCodeAt() > 96 && string[i].charCodeAt() < 123) {
//       newLettrer = string[i].charCodeAt();
//       if (newLettrer + 13 > 122) {
//         cpt++;
//         newLettrer -= 109;
//         newWords += String.fromCharCode(newLettrer + 96);
//       } else {
//         newWords += String.fromCharCode(newLettrer + 13);
//       }
//     }
//   }
//   return `j'ai fais ${cpt} tour pour le mot ${newWords}
//   dont l'origine est ${string}`;
// }
// console.log(rode13("nopqr")); // ==> abcde
// console.log(rode13("abcde")); // ==> nopqr
// console.log(rode13("NOPQR")); // ==> ABCDE
// console.log(rode13("NaPCr")); // ==> ABCDE

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
console.log(rot13("ABCDE"));
console.log(rot13("abcde"));
console.log(rot13("NOPQR"));
console.log(rot13("nopqr"));
console.log(rot13("TEST"));
console.log(rot13("Test"));
console.log(rot13("aLiba!ba"));
console.log(rot13("aLi[]^ba!ba"));
