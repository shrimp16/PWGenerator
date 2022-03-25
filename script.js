const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';
const SPECIAL = '!@#$%^&*()';

let string;

let upper = document.querySelector('#upper');
let lower = document.querySelector('#lower');
let number = document.querySelector('#numbers');
let special = document.querySelector('#special');

function add(type){
    string += type;
}

document.querySelector('#generate').addEventListener('click', () => {

    let numberOfCharacters = document.querySelector('#number-of-characters').value;
    let password = '';
    string = '';

    if(numberOfCharacters <= 0){
        alert("The password length should be greater than 0!\r\nThe recommended length is 12-16!")
    }

    if(upper.checked) add(UPPERCASE);

    if(lower.checked) add(LOWERCASE);

    if(number.checked) add(NUMBERS);

    if(special.checked) add(SPECIAL);

    for(let i = 0; i < numberOfCharacters; i++){
        let char = string.charAt(Math.floor(Math.random() * string.length));
        password += char;
        string = string.replace(char, '');
        console.log(string);
    }

    document.querySelector('#result').innerText = password;
})