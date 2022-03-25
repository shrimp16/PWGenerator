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
    
    string = '';

    if(upper.checked) add(UPPERCASE);

    if(lower.checked) add(LOWERCASE);

    if(number.checked) add(NUMBERS);

    if(special.checked) add(SPECIAL);

    let numberOfCharacters = document.querySelector('#number-of-characters').value;
    let password = '';

    for(let i = 0; i < numberOfCharacters; i++){
        let char = Math.floor(Math.random() * string.length);
        password += string.charAt(char);
    }

    document.querySelector('#result').innerText = password;
})