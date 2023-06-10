
const bizzTab = document.getElementById('bizzTab');
const games = document.getElementById('games');
const allTabs = document.getElementById('side').getElementsByTagName('div');
const allPanels = document.getElementById('container').getElementsByTagName('div');
console.log(allTabs)

for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener('click', function() { 
        show(allPanels[i]) })
}

/* bizz.addEventListener('click', show(bizz)); */

function show(element) {
    for (let i = 0; i < allPanels.length; i++) {
        allPanels[i].style.display = 'none'
    }
    element.style.display = 'block'
};

for (let i = 0; i < allTabs.length; i++) {
    allTabs[i].addEventListener('mouseover', function() { 
        allTabs[i].style.backgroundColor = 'lightgreen' });
    allTabs[i].addEventListener('mouseout', function() { 
        allTabs[i].style.backgroundColor = 'lightblue' });

}

