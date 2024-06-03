
let board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];

let currentPlayer = 'X';

function displayBoard() {
    console.log(board[0] + ' | ' + board[1] + ' | ' + board[2]);
    console.log('--+---+--');
    console.log(board[3] + ' | ' + board[4] + ' | ' + board[5]);
    console.log('--+---+--');
    console.log(board[6] + ' | ' + board[7] + ' | ' + board[8]);
}

function checkWinner(player) {
    if (
        (board[0] === player && board[1] === player && board[2] === player) ||
        (board[3] === player && board[4] === player && board[5] === player) ||
        (board[6] === player && board[7] === player && board[8] === player) ||
        (board[0] === player && board[3] === player && board[6] === player) ||
        (board[1] === player && board[4] === player && board[7] === player) ||
        (board[2] === player && board[5] === player && board[8] === player) ||
        (board[0] === player && board[4] === player && board[8] === player) ||
        (board[2] === player && board[4] === player && board[6] === player) 
    ) {
        console.log(player + ' Победитель!');
        process.exit();
    }
}

function checkDraw() {
  if (board.indexOf(' ') === -1) {
      console.log('Ничья!');
      process.exit();
  }
}

function makeMove(index) {
  if (board[index] === ' ') {
      board[index] = currentPlayer;
      checkWinner(currentPlayer);
      checkDraw();
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  } else {
      console.log('Эта ячейка занята. Пробуй снова.');
  }
}

function startGame() {
    displayBoard();
    process.stdin.on('data', (chunk) => {
        const index = parseInt(chunk) - 1;
        if (index >= 0 && index < 9) {
            makeMove(index);
            displayBoard();
        } else {
            console.log('Ты за пределами поля. Попробуй снова');
        }
    });
}

console.log('Добро пожаловать в Крестики-Нолики!');
startGame();
