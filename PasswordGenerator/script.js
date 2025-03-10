const passwordDisplay = document.querySelector('[data-passwordDisplay]');
const copyButton = document.querySelector('[data-copyButton]');
const copyMessage = document.querySelector('[data-copyMessage]');

const inputSlider = document.querySelector('[data-lengthSlider]');
const lengthDisplay = document.querySelector('[data-lengthNumber]');

const uppercaseCheckbox = document.querySelector('#uppercase');
const lowercaseCheckbox = document.querySelector('#lowercase'); 
const numbersCheckbox = document.querySelector('#numbers');
const symbolsCheckbox = document.querySelector('#symbols');

const indicator = document.querySelector('[data-indicator]');
const generateButton = document.querySelector('.generateButton');

const allCheckBox = document.querySelectorAll('input[type="checkbox"]');

const symbols = '~`!@#$%^&*()_-{}[]+=<>/,.|:;?'; 

let password = '';
let passwordLength = 10;
let checkCount = 0;
setIndicator('#ccc');

//set strength circle to grey
handleSlider();


//set password length
function handleSlider() {
    debugger;
    inputSlider.value = passwordLength;
    lengthDisplay.textContent = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;

    inputSlider.style.backgroundSize = ((passwordLength - min)*100/(max - min)) + "% 100%"
}

function setIndicator(color) {
    indicator.style.backgroundColor = color;
    //indicator.style
    indicator.style.boxShadow = `0px 0px 12px 1px ${color}`
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomNumber(){
    return getRandomInteger(0, 9);
}

function generateLowerCase() {
    return String.fromCharCode(getRandomInteger(97, 123));
}

function generateUpperCase() {
    return String.fromCharCode(getRandomInteger(65, 91));
}


function generateSymbol() {
    return symbols[getRandomInteger(0, symbols.length)];   
}

function calculateStrength() {
    
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if(uppercaseCheckbox.checked) {
        hasUpper = true;
    } 
    if(lowercaseCheckbox.checked) {
        hasLower = true;
    }
    if(numbersCheckbox.checked) {
        hasNumber = true;
    }
    if(symbolsCheckbox.checked) {
        hasSymbol = true;
    }
    
    if(hasUpper && hasLower && hasNumber && hasSymbol && passwordLength >= 8) {
        setIndicator('#0F0');
    }
    else if((hasLower || hasUpper) && (hasNumber || hasSymbol) && passwordLength >= 6) {
        setIndicator('#FF0');
    }
    else {
        setIndicator('#F00');
    }
}

async function copyContent(){
    try{

        await navigator.clipboard.writeText(passwordDisplay.value);
        copyMessage.textContent = 'Copied!';

    }
    catch(err) {
        copyMessage.textContent = 'Failed!';
    }
    copyMessage.classList.add('active');
    setTimeout(() => {
        copyMessage.classList.remove('active');
    }, 2000);
}

function shufflePassword(password) {    

    //fisher-yates shuffle
    for (let index = password.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [password[index], password[randomIndex]] = [password[randomIndex], password[index]];
    }

    let shuffledPassword = '';
    password.forEach((char) => {
        shuffledPassword += char;
    });

    return shuffledPassword;


}

function handleCheckBoxChange() {

    checkCount = 0;
    allCheckBox.forEach((checkbox) => {
        if(checkbox.checked) {
            checkCount++;
        }
    });

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }
}

allCheckBox.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
});

inputSlider.addEventListener('input', (event) => {

    passwordLength = event.target.value;
    handleSlider();
});


copyButton.addEventListener('click', () => {  
    if(passwordDisplay.value) {
        copyContent();
    }
});

generateButton.addEventListener('click', () => {

    if( checkCount == 0) {
        return;
    }

    if(passwordLength < checkCount){
        passwordLength = checkCount;
        handleSlider();
    }

    password = '';

    let functionArray = [];

    if(uppercaseCheckbox.checked) {
        functionArray.push(generateUpperCase);
    }

    if(lowercaseCheckbox.checked) {
        functionArray.push(generateLowerCase);
    }

    if(numbersCheckbox.checked) {
        functionArray.push(generateRandomNumber);
    }

    if(symbolsCheckbox.checked) {
        functionArray.push(generateSymbol);
    }

    for (let funcName = 0; funcName < functionArray.length; funcName++) {
        password += functionArray[funcName]();
    }

    for (let num = 0; num < passwordLength - functionArray.length; num++) {
        const randomIndex = getRandomInteger(0, functionArray.length);
        password += functionArray[randomIndex]();
    }

    password = shufflePassword(Array.from(password));
    passwordDisplay.value = password;
    calculateStrength();

});
