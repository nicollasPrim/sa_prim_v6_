let res6 = document.getElementById('res6')
let res66 = document.getElementById('res66')
let code6 = document.getElementById('code6')

let input = document.createElement('input')
input.setAttribute("id", "idade");  

code6.appendChild(input)

aparece6.style.display = 'none'

function mostra6(){
    aparece6.style.display = 'flex'
}

function ex6(){
    let idade = Number(document.getElementById('idade').value)

    if (idade < 16){
        res6.innerHTML = "O usuario tem " + idade + " anos de idade, ou seja, não pode votar!"
    }
    else if ((idade >= 16) && (idade < 18)){
        res6.innerHTML = "O usuario tem " + idade + " anos de idade, ou seja, o voto é facultativo!"
    }
    else if ((idade >= 18) && (idade < 70)){
        res6.innerHTML = "O usuario tem " + idade + " anos de idade, ou seja, o voto é obrigatório!"
    }
    else if (idade <= -1){
        res6.innerHTML = "Idade inválida"
    }

}