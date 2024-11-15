import {latinToMorse, morseToLatin} from "./alphabet.js"

//----------DOM----------
const buttonDecode = document.querySelector('.button-decode')
const buttonEncode = document.querySelector('.button-encode')
const latinInput = document.querySelector('.input-latin')
const morseInput = document.querySelector('.input-morse')
//-----------------------

function getLatinCharacterList(myString){
    const myArray = myString.split('')
    return myArray
}

function translateLatinCharacter(character){
    let myCharacter = character.toUpperCase()
    for(const letter in latinToMorse){
        if(myCharacter === letter){
            myCharacter = latinToMorse[letter]
        }
    }
    return myCharacter
}

function encode(myString){
    const myText = getLatinCharacterList(myString)
    let encodedText = ""
    for (let i = 0; i < myText.length; i++){
        let encodedCharacter = translateLatinCharacter(myText[i])
        if (encodedCharacter === " "){
            encodedCharacter = "/"
        }
        encodedText += encodedCharacter + " "
    }
    return encodedText
}

function getMorseCharacterList(myString){
    const myArray = myString.split(' ')
    return myArray
}

function translateMorseCharacter(character){
    let myCharacter = character
    for(const morseLetter in morseToLatin){
        if(myCharacter === morseLetter){
            myCharacter = morseToLatin[morseLetter]
        }
    }
    myCharacter = myCharacter.toLowerCase()
    return myCharacter
}

function decode(myString){
    const myText = getMorseCharacterList(myString)
    let decodedText = ""
    for (let i = 0; i < myText.length; i++){
        let decodedCharacter = translateMorseCharacter(myText[i])
        if (decodedCharacter === "/"){
            decodedCharacter = " "
        }
        decodedText += decodedCharacter
    }
    return decodedText
}

buttonEncode.addEventListener('click', ()=>{
    const text = encode(latinInput.value)
    morseInput.value = text
})

buttonDecode.addEventListener('click', ()=>{
    const text = decode(morseInput.value)
    latinInput.value = text
})