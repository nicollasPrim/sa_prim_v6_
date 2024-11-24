let res2 = document.getElementById('res2')
let res22 = document.getElementById('res22')

let arr = [0, 0, 0, 0, 0, 0, 0]
let aux = []

aparece2.style.display = 'none'

function mostra2(){
    aparece2.style.display = 'flex'
}

function geraRand(max, min){
    let valr = Math.floor(Math.random() * (20 - 1 + 1) + 1)
    return valr
}

function coloca(){
    for(let j=arr.length; j>0; j--){
        for(let i=0; i<arr.length-1; i++){
            arr[i] = geraRand(20, 1)
            }
            console.log(arr)
    }
}

coloca()

function ex2(){
    res2.innerHTML = `Array desordenada: ${arr}`
    console.log(arr)
    for(j=arr.length; j>0; j--){
        for(i=0; i<arr.length-1; i++){
            if(arr[i] < arr[i+1]){
                aux = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = aux
            }
            console.log(arr)
        }
    }
    res22.innerHTML = `Array ordenada: ${arr}`
}

