
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

const nums = [0,0,0];

for (let i = 0; i < 3; i++) {
    nums[i] = getRandomInt(9) + 1;
}

x = document.getElementById('x');
y = document.getElementById('y');
z = document.getElementById('z');

numDisplays = [x, y, z]

const feedback = document.getElementById('response-text');

const a = getRandomInt(9) + 1;
const b = getRandomInt(9) + 1;

for (let i = 0; i < 3; i++) {
    numDisplays[i].innerHTML = nums[i];
    numDisplays[i].addEventListener('mouseover', function() {
        numDisplays[i].innerHTML = (nums[i] * a) + b;
    });
    numDisplays[i].addEventListener('mouseout', function() {
        numDisplays[i].innerHTML = nums[i];
    });
}

const button = document.getElementById('submit');

button.addEventListener('click', function() {
    checkAnswer()
})

function checkAnswer() {
    let ansA = parseInt(document.getElementById('a').value);
    let ansB = parseInt(document.getElementById('b').value);
    
    if (ansA === a && ansB === b) {
        feedback.style.color = 'green';
        feedback.innerHTML = "Correct!";
    } else {
        feedback.style.color = 'red';
        feedback.innerHTML = "Incorrect, please try again.";
    }
}