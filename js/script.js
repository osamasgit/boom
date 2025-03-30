// guardar el numero del usuario
// generar un numero aleatorio del 1 al 3
// iniciar cuenta de atras
// Comparar los dos numeros
// mostrar el resultado
// reiniciar el juego

const userInput = document.getElementById("userInput");
const countdown = document.getElementById("countdown");
const result = document.getElementById("result");
const restartBtn = document.getElementById("restart");

function startGame() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    let count = 5;
    countdown.textContent = count;
    result.textContent = "";
  
    const interval = setInterval(() => {
      count--;
      countdown.textContent = count;
      if (count === 0) {
        clearInterval(interval);
        checkResult();
      }
    }, 1000);
  }

function checkResult() {
const userNumber = parseInt(userInput.value);
if (userNumber >= 1 && userNumber <= 3) {
    if (userNumber === randomNumber) {
    result.innerHTML = `<div class='win'>¡Has salvado el mundo! Has elegido el numero ${userNumber} y el número correcto es ${randomNumber} \u{1F451}</div>`;
    } else {
    result.innerHTML = `<div class='lose'> \u{1F4A5} La bomba ha estallado. Has elegido el numero ${userNumber} y el número correcto es ${randomNumber}</div>`;
    }
} else {
    result.textContent = "Por favor, introduce un número válido entre 1 y 3.";
}
}

userInput.addEventListener("change", () => {
    startGame();
});
  
restartBtn.addEventListener("click", () => {
userInput.value = "";
countdown.textContent = "";
result.textContent = "";
});