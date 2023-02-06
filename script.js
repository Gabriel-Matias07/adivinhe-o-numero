var maximum = 1000
var minimum = 0
var secretNumber = parseInt(Math.random() * 1001)
var userName = String(prompt('Olá, qual o seu nome?'))
if(userName == ""){
    alert('O campo "nome" não pode estar vazio!')
} else{
while(reply != secretNumber){
    var reply = parseInt(prompt('Digite um número inteiro entre 0 e 1000.'))
    if(reply == null){
            break
    } if(reply == ''){
            alert('Você não digitou nada, bobão!')
            break
        }
    if (reply == secretNumber){
        alert('Parabéns, ' +userName+ ' acertou o número secreto que era ' +secretNumber+ '!')
    }
    else if(reply > maximum || reply < minimum){
        alert('Apenas números inteiros entre 0 e 1000, bobinho!')
    }
    else if(reply > secretNumber){
        alert('O número secreto é menor que ' +reply)
    }
    else if(reply < secretNumber){
        alert('O número secreto é maior que ' +reply)
    }
}
}

//Em breve melhoras na identação 