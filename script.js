let add = document.querySelector('#add');
let substratct = document.querySelector('#substratct');
console.log(add, substratct);
add.addEventListener('click', () => {
    let output = document.querySelector('#output');
    let resultado = parseInt(output.innerText) + 1;
    if (resultado > 10) {
        alert('No puedes sumar más de 10');
        resultado=0;
     }
    output.innerText = resultado;


});

substratct.addEventListener('click', () => {
    let output = document.querySelector('#output');
    let resultado = parseInt(output.innerText) - 1;
    if (resultado < 0) {
        alert('No puedes restar menos de 0');
        resultado=0;
        }
    output.innerText = resultado;
});

//1 funcione el subtract
//2 contador no mayor a 10

