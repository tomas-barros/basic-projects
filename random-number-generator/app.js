// dom
const 
    inputOne = document.getElementById('inputOne'),
    inputTwo = document.getElementById('inputTwo'),
    result = document.getElementById('result'),
    button = document.getElementById('btn'),
    negativeNumbersBtn = document.getElementById('negativeNumbers');

// configs
var
    negativeNumbers = false;

// random num generator MDN
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

negativeNumbersBtn.addEventListener('click', function() {
    if (negativeNumbers) {
        negativeNumbers = false;
        console.log('negativeNumbers: OFF');
        negativeNumbersBtn.style.backgroundColor = 'red';
    } else {
        negativeNumbers = true;
        console.log('negativeNumbers: ON');
        negativeNumbersBtn.style.backgroundColor = 'limegreen';
    }
})

button.addEventListener('click', function() {
    let finalNumber = getRandomInt(parseInt(inputOne.value), parseInt(inputTwo.value));

    if (!negativeNumbers) {
        result.innerHTML = finalNumber;
    } else {
        result.innerHTML = '-' + finalNumber;
    }
});