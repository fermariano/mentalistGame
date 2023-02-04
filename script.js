//numero aleatorio entre 1 e 1001
// mostrar quantos chutes
// numero maximo de tentativas
var t = 0
var numero = parseInt(Math.random() * 1001)
function enviar () {

var texto = document.getElementById('result')
var tent = document.getElementById('tries')


var chute = Number(document.getElementById('chute').value)
    if (chute > numero) {
    texto.innerHTML = " "
    texto.innerHTML = `❌ Você errou! O número é menor que ${chute}.`
    t++ 
    tent.innerHTML = `${t} tentativas`
} else if (chute < numero) {
    texto.innerHTML = " "
    texto.innerHTML = `❌ Você errou! O número é maior que ${chute}`
    t++
    tent.innerHTML = `${t} tentativas`
} else if (chute == numero) {
    texto.innerHTML = `✅ Você acertou! O número correto é ${numero}`
}

}

