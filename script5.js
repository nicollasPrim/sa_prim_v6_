let res5 = document.getElementById('res5');
let res55 = document.getElementById('res55');

aparece5.style.display = 'none'

function mostra5(){
    aparece5.style.display = 'flex'
}

function geraRand(max, min) {
    let valr = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    return valr;
}

let arr2 = [0, 0, 0, 0, 0, 0, 0];

function preencheArray() {
    for (let i = 0; i < arr2.length; i++) {
        arr2[i] = geraRand(20, 1);
    }
    console.log(arr2);
}

preencheArray();

function insertionSort() {
    res5.innerHTML = `Array desordenada: ${arr2}`;
    console.log(`Array desordenada: ${arr2}`);

    for (let i = 1; i < arr2.length; i++) {
        let chave = arr2[i];
        let j = i - 1;

        while (j >= 0 && arr2[j] > chave) {
            arr2[j + 1] = arr2[j];
            j--;
        }
        arr2[j + 1] = chave;
        console.log(`Iteração ${i}: ${arr2}`);
    }

    res55.innerHTML = `Array ordenada: ${arr2}`;
    console.log(`Array ordenada: ${arr2}`);
}
