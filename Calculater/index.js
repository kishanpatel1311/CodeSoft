let display = "";

let inputs = document.querySelectorAll(".btn-style");
let output = document.getElementById('output');


Array.from(inputs).forEach((input) => {
    input.addEventListener('click', (e) => {
        if (input.innerHTML == '=') {
            display = eval(display);
            output.innerHTML = display;
        }
        else if (input.innerHTML == 'AC') {
            display = '';
            output.innerHTML = display;
        }
        else if (input.innerHTML == 'C') {
            display = '0';
            output.innerHTML = display;
            display = '';
        }
        else {
            display = display + e.target.innerHTML;
            document.querySelector('#output').innerHTML = display;
        }
    })
})

