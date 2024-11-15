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

encode('Eloi')