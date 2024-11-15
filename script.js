import {latinToMorse, morseToLatin} from "./alphabet.js"

//----------DOM----------
const buttonDecode = document.querySelector('.button-decode')
const buttonEncode = document.querySelector('.button-encode')
const latinInput = document.querySelector('.input-latin')
const morseInput = document.querySelector('.input-morse')
//-----------------------

function getLatinCharacterList(myString){ //je découpe mon texte
    const myArray = myString.split('')
    return myArray
}

function translateLatinCharacter(character){ //je traduis un caractère
    let myCharacter = character.toUpperCase()
    for(const letter in latinToMorse){ //rappel latinToMorse est mon dictionnaire annexe
        if(myCharacter === letter){
            myCharacter = latinToMorse[letter]
        }
    }
    return myCharacter
}

function encode(myString){ //j'appelle mes fonctions pour retourner un texte encodé
    const mySplittedText = getLatinCharacterList(myString)
    let encodedText = ""
    for (let i = 0; i < mySplittedText.length; i++){ //je traduis chaque caractère de mon tableau
        let encodedCharacter = translateLatinCharacter(mySplittedText[i])
        if (encodedCharacter === " "){ //pas dans la fonction traduction car ce n'est pas de la traduction
            encodedCharacter = "/"
        }
        encodedText += encodedCharacter + " " //j'ajoute le caractère traduit au texte avec un espace pour la lisibilité 
    }
    return encodedText
}

function getMorseCharacterList(myString){ //je découpe mon texte
    const myArray = myString.split(' ')
    return myArray
}

function translateMorseCharacter(character){ //je traduis un caractère
    let myCharacter = character
    for(const morseLetter in morseToLatin){ //rappel morseToLatin est mon dictionnaire annexe
        if(myCharacter === morseLetter){
            myCharacter = morseToLatin[morseLetter]
        }
    }
    myCharacter = myCharacter.toLowerCase() //bonus pour la forme du texte final
    return myCharacter
}

function decode(myString){ //j'appelle mes fonctions pour retourner un texte décodé
    const mySplittedText = getMorseCharacterList(myString)
    let decodedText = ""
    for (let i = 0; i < mySplittedText.length; i++){ //je traduis chaque caractère de mon tableau
        let decodedCharacter = translateMorseCharacter(mySplittedText[i])
        if (decodedCharacter === "/"){ //pas dans la fonction traduction car ce n'est pas de la traduction
            decodedCharacter = " "
        }
        decodedText += decodedCharacter //j'ajoute le caractère traduit au texte
    }
    return decodedText
}

buttonEncode.addEventListener('click', ()=>{ //execute le code quand on clique dessus
    const text = encode(latinInput.value)
    morseInput.value = text
})

buttonDecode.addEventListener('click', ()=>{ //execute le code quand on clique dessus
    const text = decode(morseInput.value)
    latinInput.value = text
})