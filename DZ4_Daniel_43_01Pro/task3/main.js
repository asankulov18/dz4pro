
var redBlock = document.querySelector('.red_block');
var greenBlock = document.querySelector(".green_block");
var redh2 = document.querySelector('#red_h2')
var greenh2 = document.querySelector('#green_h2')

function redFunc() {
    redBlock.innerHTML = 'Stop'
	redBlock.style.backgroundColor = 'red'
}

function greenFunc() {
	greenBlock.innerHTML = 'Go'
	greenBlock.style.backgroundColor = 'green'
}


var a = prompt('Введите красный или зеленый');
if (a === 'красный') {
    redFunc();
} else if (a === 'зеленый') {
    greenFunc();
}

