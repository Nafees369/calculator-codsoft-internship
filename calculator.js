var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn');

/*============ For getting the value of btn, Here we use for loop ============*/
for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }

        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

// Exact values of pi and e
const PI = Math.PI; // Number representing pi
const E = Math.E; // Number representing e

function sin() {
    screen.value = Math.sin(screen.value);
}

function cos() {
    screen.value = Math.cos(screen.value);
}

function tan() {
    screen.value = Math.tan(screen.value);
}

function pow() {
    screen.value = Math.pow(screen.value, 2);
}

function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}

function log() {
    screen.value = Math.log(screen.value);
}

function fact() {
    var i, num, f = 1;
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

// Functions using exact values of pi and e
function pi() {
    screen.value = PI;
}

function e() {
    screen.value = E;
}
