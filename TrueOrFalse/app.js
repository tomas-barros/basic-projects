// DOM
const
    firstInput = document.getElementById('firstInput'),
    secondInput = document.getElementById('secondInput'),
    result = document.getElementById('result'),
    button = document.getElementById('btn');

button.addEventListener('click', function() {
    let
        firstValue = firstInput.value,
        secondValue = secondInput.value;


    if (firstValue === secondValue) {
        console.log('Equal!');
        result.innerHTML = 'True';
    } else {
        console.log('Not equal.');
        result.innerHTML = 'False';
    }

});