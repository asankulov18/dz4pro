
var counter1 = document.getElementById('counter');
var increment1 = document.getElementById('increment');
var decrement1 = document.getElementById('decrement');
var counter = 0;

increment1.addEventListener('click', () => {
    counter++;
    func1();
    counter1.style.color = 'green';
});

decrement1.addEventListener('click', () => {
    if (counter > 0) {
        counter--;
        counter1.style.color = 'red';
        func1();
    }
});

function func1() {
    counter1.textContent = counter;
}
