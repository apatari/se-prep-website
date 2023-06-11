
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


const a = getRandomInt(9) + 1;
const b = getRandomInt(9) + 1;

/* x.innerHTML = nums[0];
y.innerHTML = nums[1];
z.innerHTML = nums[2]; */

for (let i = 0; i < 3; i++) {
    numDisplays[i].innerHTML = nums[i];
    numDisplays[i].addEventListener('mouseover', function() {
        numDisplays[i].innerHTML = (nums[i] * a) + b;
    });
    numDisplays[i].addEventListener('mouseout', function() {
        numDisplays[i].innerHTML = nums[i];
    });
}

/* x.addEventListener('mouseover', function() {
    x.innerHTML = (nums[0] * a) + b;
})

x.addEventListener('mouseout', function() {
    x.innerHTML = nums[0];
})

y.addEventListener('mouseover', function() {
    y.innerHTML = (nums[1] * a) + b;
})

y.addEventListener('mouseout', function() {
    y.innerHTML = nums[1];
})

z.addEventListener('mouseover', function() {
    z.innerHTML = (nums[2] * a) + b;
})

z.addEventListener('mouseout', function() {
    z.innerHTML = nums[2];
}) */