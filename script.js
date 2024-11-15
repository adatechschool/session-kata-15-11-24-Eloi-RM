import {latinToMorse, morseToLatin} from "./alphabet.js"

//----------DOM----------
const buttonDecode = document.querySelector('.button-decode')
const buttonEncode = document.querySelector('.button-encode')
const latinInput = document.querySelector('.input-latin')
const latinOutput = document.querySelector('.output-latin')
const morseInput = document.querySelector('.input-morse')
const morseOutput = document.querySelector('.output-morse')
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
        console.log(encodedCharacter)
        encodedText += encodedCharacter + " "
    } 
    console.log(encodedText)
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
    return myCharacter
}

function decode(myString){
    const myText = getMorseCharacterList(myString)
    let decodedText = ""
    for (let i = 0; i < myText.length; i++){
        const decodedCharacter = translateMorseCharacter(myText[i])
        console.log(decodedCharacter)
        decodedText += decodedCharacter + " "
    }
    console.log(decodedText)
    return decodedText
}

buttonEncode.addEventListener('click', ()=>{
    const text = encode(latinInput.value)
    morseOutput.innerText = text
})

buttonDecode.addEventListener('click', ()=>{
    const text = decode(morseInput.value)
    latinOutput.innerText = text
})