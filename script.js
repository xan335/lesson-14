let one = document.querySelector('#one');
let inc = document.querySelector('#inc')
let dec = document.querySelector('#dec')
let rnd = document.querySelector('#rnd')
let resed = document.querySelector('#resed')

let rt = 0;


one.textContent = 0;

rnd.onclick = () => {
    one.textContent = Math.floor(Math.random() * 100);
    rt = one.textContent
}
inc.onclick = () => {
    one.textContent = ++rt;
}
dec.onclick = () => {
    one.textContent = --rt;
}

resed.onclick = () => {
    one.textContent = (rt = 0);
}


