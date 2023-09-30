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

const Piece = class {
    constructor(display, color) {
        this.display = display
        this.color = color
    }
}

const i = new Piece([   [0, -2, 0, 0],
                        [0, -2, 0, 0],
                        [0, -2, 0, 0],
                        [0, -2, 0, 0]],
                        'blue')

const o = new Piece([   [0, 0, 0, 0],
                        [0, -2, -2, 0],
                        [0, -2, -2, 0],
                        [0, 0, 0, 0]],
                        'yellow')

const s = new Piece([   [0, 0, 0, 0],
                        [0, 0, -2, -2],
                        [0, -2, -2, 0],
                        [0, 0, 0, 0]],
                        'red')

const z = new Piece([   [0, 0, 0, 0],
                        [0, -2, -2, 0],
                        [0, 0, -2, -2],
                        [0, 0, 0, 0]],
                        'green')

const l = new Piece([   [0, -2, 0, 0],
                        [0, -2, 0, 0],
                        [0, -2, -2, 0],
                        [0, 0, 0, 0]],
                        'orange')
    
const j = new Piece([   [0, 0, -2, 0],
                        [0, 0, -2, 0],
                        [0, -2, -2, 0],
                        [0, 0, 0, 0]],
                        'pink')
                        
const t = new Piece([   [0, 0, 0, 0],
                        [0, -2, -2, -2],
                        [0, 0, -2, 0],
                        [0, 0, 0, 0]],
                        'purple')

const Pieces = [i, o, s, z, l, j, t]
let playPiece

const blank_piece = [[0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0]];
let pieceX = 0;
let pieceY = 0;
let rightPieceCheck = 0
let rightRotatePieceCheck = 0
let coors = [4, 0];
let startX = coors[0];
let endX = startX + 4;
let startY = coors[1];
let endY = startY + 4;

const findPiece = (element) => element === -2;

const spawnPiece = (max) => {
    return Math.floor(Math.random() * max);
}

const printBoard = () => {
    for (const index in board) {
        console.log(board[index] + "       index" + index);
    }
}

const draw = (piece, bool) => {
    if (coors[0] > 6) {
        coors[0] = coors[0] - Math.abs(rightPieceCheck - rightRotatePieceCheck) 
        for (let x = coors[0]; x < (coors[0] + 4) - (coors[0] - 6) + Math.abs(rightPieceCheck - rightRotatePieceCheck); x++) {
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

const rotate = () => {
    draw(blank_piece, false);
    let transposedPiece = playPiece[0].map((_, colIndex) => playPiece.map(row => row[colIndex]));
    let rotatedPiece = transposedPiece.map(row => row.reverse());
    if (coors[0] >= 6) {
        for (const i in playPiece) {
            playIndex = playPiece[i].findLastIndex(findPiece)
            rotateIndex = rotatedPiece[i].findIndex(findPiece)
            if (playIndex > rightPieceCheck) {
                rightPieceCheck = playIndex
            }
            if (rotateIndex > rightRotatePieceCheck) {
                rightRotatePieceCheck = rotateIndex
            }
        }
    }

    playPiece = rotatedPiece
    draw(playPiece, true);
    rightPieceCheck = 0
    rightRotatePieceCheck = 0
}

draw(playPiece, true);
down();
down();
right();
right();
right();
right();
right();
rotate();
rotate();
rotate();
rotate();
rotate();
rotate();
rotate();
rotate();
