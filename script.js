const square = document.getElementById("square");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const message = document.getElementById("message");

let score = 0;
const goal = 10;

function moveSquare() {
  const areaWidth = gameArea.clientWidth;
  const areaHeight = gameArea.clientHeight;
  const squareSize = square.clientWidth;

  const randomX = Math.floor(Math.random() * (areaWidth - squareSize));
  const randomY = Math.floor(Math.random() * (areaHeight - squareSize));

  square.style.left = randomX + "px";
  square.style.top = randomY + "px";
}

square.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = "Cliques: " + score;

  if (score >= goal) {
    message.textContent = "🎉 Você venceu!";
    square.style.display = "none";
  } else {
    moveSquare();
  }
});

moveSquare();
