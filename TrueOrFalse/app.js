// DOM
const
    firstInput = document.getElementById('firstInput'),
    secondInput = document.getElementById('secondInput'),
    result = document.getElementById('result'),
    button = document.getElementById('btn');

button.addEventListener('click', function() {

    if (firstInput.value === secondInput.value) {
        console.log('Equal!');
        result.innerHTML = 'True';
    } else {
        console.log('Not equal.');
        result.innerHTML = 'False';
    }

});