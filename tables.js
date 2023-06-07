const nums = [1, 2, 3];

a = document.getElementById('a');
b = document.getElementById('b');
c = document.getElementById('c');

const funPlus = 2;
const funTimes = 3;

a.innerHTML = nums[0];
b.innerHTML = nums[1];
c.innerHTML = nums[2];

a.addEventListener('mouseover', function() {
    a.innerHTML = (nums[0] * funTimes) + funPlus;
})

a.addEventListener('mouseout', function() {
    a.innerHTML = nums[0];
})