let res4 = document.getElementById('res4');
let res44 = document.getElementById('res44');

aparece4.style.display = 'none'

function mostra4(){
    aparece4.style.display = 'flex'
}

function geraRand(max, min) {
    let valr = Math.floor(Math.random() * (20 - 1 + 1) + 1);
    return valr;
}

let arr4 = [0, 0, 0, 0, 0, 0, 0];

function preencheArray() {
    for (let i = 0; i < arr4.length; i++) {
        arr4[i] = geraRand(20, 1);
    }
    console.log(arr4);
}

preencheArray();

function selectionSort() {
    res4.innerHTML = `Array desordenada: ${arr4}`;
    console.log(arr4);

    for (let i = 0; i < arr4.length - 1; i++) {
        let minI = i;
        
        for (let j = i + 1; j < arr4.length; j++) {
            if (arr4[j] < arr4[minI]) {
                minI = j;
            }
        }
        
        if (minI !== i) {
            let temp = arr4[i];
            arr4[i] = arr4[minI];
            arr4[minI] = temp;
        }

        console.log(`Iteração ${i + 1}: ${arr4}`);
    }

    res44.innerHTML = `Array ordenada: ${arr4}`;
    console.log(arr4);
}
