
const p1UpButton = document.querySelector('#p1Plus1')
const p2UpButton = document.querySelector('#p2Plus1')
const p1DownButton = document.querySelector('#p1Minus1')
const p1DownButtonTen = document.querySelector('#p1Minus10')
const p2DownButton = document.querySelector('#p2Minus1')
const p2DownButtonTen = document.querySelector('#p2Minus10')
const p1ScoreDisplay = document.querySelector('#scoreDisplayP1')
const p2ScoreDisplay = document.querySelector('#scoreDisplayP2')
const resetButton = document.querySelector('#resetButton')
const resetButton100 = document.querySelector('#resetButton100')

let gameOver = false;
let p1Score = 50;
let p2Score = 50;


// upButtons
p1UpButton.addEventListener('click', function () {

    p1Score += 1
    if (p1Score <= 0) { gameOver = true; }
    p1ScoreDisplay.textContent = p1Score
    gameOver = false;
})
p2UpButton.addEventListener('click', function () {
    p2Score += 1
    p2ScoreDisplay.textContent = p2Score
    gameOver = false;
})

//downButtons

p1DownButton.addEventListener('click', function () {
    if (!gameOver) {
        p1Score -= 1
        if (p1Score <= 0) { gameOver = true; }
    }
    p1ScoreDisplay.textContent = p1Score
})
p1DownButtonTen.addEventListener('click', function () {
    if (!gameOver) {
        if (p1Score <= 9){
            p1Score = 0;
            gameOver = true;
        }
        else {
        p1Score -= 10
        if (p1Score <= 0) { gameOver = true; }
    }
    }
    p1ScoreDisplay.textContent = p1Score
})
p2DownButton.addEventListener('click', function () {
    if (!gameOver) {
        p2Score -= 1
        if (p2Score <= 0) { gameOver = true; }
    }
    p2ScoreDisplay.textContent = p2Score
})
p2DownButtonTen.addEventListener('click', function () {
    if (!gameOver) {
        if (p2Score <= 9){
            p2Score = 0;
            gameOver = true;
        }
        else {
        p2Score -= 10
        if (p2Score <= 0) { gameOver = true; }
    }
    }
    p2ScoreDisplay.textContent = p2Score
})
// New Game

resetButton.addEventListener('click', reset)
resetButton100.addEventListener('click', reset100)

function reset() {
    p1Score = 50;
    p2Score = 50;
    p1ScoreDisplay.textContent = 50;
    p2ScoreDisplay.textContent = 50;
    gameOver = false;
}
function reset100() {
    p1Score = 100;
    p2Score = 100;
    p1ScoreDisplay.textContent = 100;
    p2ScoreDisplay.textContent = 100;
    gameOver = false;
}