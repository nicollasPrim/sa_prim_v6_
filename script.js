let res1 = document.getElementById('res1')
let res11 = document.getElementById('res11')

function geraRand(max, min){
    let valr = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    return valr
}

aparece.style.display = 'none'

function mostra(){
    aparece.style.display = 'flex'
}

let arr1 = [0, 0, 0, 0, 0, 0, 0]
let aux1 = []

function coloca1(){
    for(let j=arr1.length; j>0; j--){
        for(let i=0; i<arr1.length-1; i++){
            arr1[i] = geraRand(20, 1)
            }
            console.log(arr1)
    }
}

coloca1()

function ex1(){
    res1.innerHTML = `Array desordenada: ${arr1}`
    console.log(arr1)
    for(j=arr1.length; j>0; j--){
        for(i=0; i<arr1.length-1; i++){
            if(arr1[i] > arr1[i+1]){
                aux1 = arr1[i]
                arr1[i] = arr1[i+1]
                arr1[i+1] = aux1
            }
            console.log(arr1)
        }
    }
    res11.innerHTML = `Array ordenada: ${arr1}`
}
