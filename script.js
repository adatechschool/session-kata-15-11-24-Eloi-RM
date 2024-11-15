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
    for(let i = 0; i < myText.length; i++){
        const encodedCharacter = translateLatinCharacter(myText[i])
        console.log(encodedCharacter)
    }
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
    for(let i = 0; i < myText.length; i++){
        const decodedCharacter = translateMorseCharacter(myText[i])
        console.log(decodedCharacter)
    }
}


const morseToLatin = {
    '-': "T",
    '--': "M",
    '---': "O",
    '--.': "G",
    '--.-': "Q",
    '--..': "Z",
    '-.': "N",
    '-.-': "K",
    '-.--': "Y",
    '-.-.': "C",
    '-..': "D",
    '-..-': "X",
    '-...': "B",
    '.': "E",
    '.-': "A",
    '.--': "W",
    '.---': "J",
    '.--.': "P",
    '.-.': "R",
    '.-..': "L",
    '..': "I",
    '..-': "U",
    '..-.': "F",
    '...': "S",
    '...-': "V",
    '....': "H"
  }

  const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

encode('Eloi est sympa')

decode('. .-.. --- .. / . ... - / ... -.-- -- .--. .-')
