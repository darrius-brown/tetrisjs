board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

l_piece = [[0, -2, 0, 0],
[0, -2, 0, 0],
[0, -2, -2, 0],
[0, 0, 0, 0]];
let playPiece
const blank_piece = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]];
let pieceX = 0;
let pieceY = 0;
let coors = [4, 0];
let startX = coors[0];
let endX = startX + 4;
let startY = coors[1];
let endY = startY + 4;


const printBoard = () => {
    for (const index in board) {
        console.log(board[index] + "       index" + index);
    }
}

const draw = (piece, bool) => {
    if (coors[0] > 6) {
        for (let x = coors[0]; x < coors[0] + 4 - (coors[0] - 6); x++) {
            pieceY = 0;
            for (let y = coors[1]; y < coors[1] + 4; y++) {
                board[y][x] = piece[pieceY][pieceX]
                pieceY += 1;
            }
            pieceX += 1;
        }
    }
    else {
        for (let x = coors[0]; x < coors[0] + 4; x++) {
            pieceY = 0;
            for (let y = coors[1]; y < coors[1] + 4; y++) {
                board[y][x] = piece[pieceY][pieceX]
                pieceY += 1;
            }
            pieceX += 1;
        }
    }
    pieceX = 0;
    pieceY = 0;
    if (bool === true) {
        printBoard();
    }
}

const down = () => {
    draw(blank_piece, false);
    coors[1] += 1;
    draw(playPiece, true);
}

const right = () => {
    for (let i = 0; i < board.length; i++) {
        if (board[i][9] < 0) {
            console.log('Action not possible')
            return
        }
    }
    draw(blank_piece, false);
    coors[0] += 1;
    draw(playPiece, true);
}

const left = () => {
    for (let i = 0; i < board.length; i++) {
        if (board[i][0] < 0) {
            console.log('Action not possible')
            return
        }
    }
    draw(blank_piece, false)
    coors[0] -= 1;
    draw(playPiece, true)
}

const rotate = (piece) => {
    draw(blank_piece, false);
    let transposedPiece = piece[0].map((_, colIndex) => piece.map(row => row[colIndex]));
    playPiece = transposedPiece.map(row => row.reverse());
    draw(playPiece, true);
}

draw(playPiece, true);
// down();
// down();
// right();
right();
right();
right();
right();
