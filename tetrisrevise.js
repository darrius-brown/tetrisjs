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

const pieces = [i, o, s, z, l, j, t]
let playPiece

const blank_piece = [[0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0]];
let pieceX = 0;
let pieceY = 0;
let rightPieceCheck = 0;
let rightRotatePieceCheck = 0;
let leftPieceCheck = 0;
let leftRotatePieceCheck = 0;
let rightOverlap = 0
let leftOverlap = 0
let rightRotateOverlap = 0
let coors = [4, 0];
let startX = coors[0];
let endX = startX + 4;
let startY = coors[1];
let endY = startY + 4;

const findPiece = (element) => element === -2;

const spawnPiece = () => {
    playPiece =  pieces[Math.floor(Math.random() * pieces.length)].display
    draw(playPiece, true)
}

const printBoard = () => {
    for (const index in board) {
        console.log(board[index] + "       index" + index);
    }
}

const draw = (piece, bool) => {
    if (coors[0] > 6) {
        rightOverlap = coors[0] - 6
    }

    if ( coors[0] < 0) {
        leftOverlap = Math.abs(coors[0])
    }
     
    for (let x = coors[0]; x < (coors[0] + 4) - rightOverlap; x++) {
        pieceY = 0;
        for (let y = coors[1]; y < coors[1] + 4; y++) {
            board[y][x] = piece[pieceY][pieceX]
            pieceY += 1;
        }
        pieceX += 1;
    }
    
    pieceX = 0;
    pieceY = 0;
    rightOverlap = 0
    leftOverlap = 0
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
            rotateIndex = rotatedPiece[i].findLastIndex(findPiece)
            if (playIndex > rightPieceCheck) {
                rightPieceCheck = playIndex
            }

            if(rotateIndex > rightRotatePieceCheck) {
                rightRotatePieceCheck = rotateIndex
            }
        }
        rightRotateOverlap = Math.abs(rightPieceCheck - rightRotatePieceCheck)
        coors[0] = coors[0] - rightRotateOverlap
    }

    if (coors[0] <= 0) {
        for (const i in playPiece) {
            playIndex =playPiece[i].findIndex(findPiece)
            rotateIndex = rotatedPiece[i].findIndex(findPiece)
            console.log(playIndex)
            console.log(rotateIndex)
            if (playIndex > leftPieceCheck) {
                leftPieceCheck = playIndex
            }
            if(rotateIndex > leftRotatePieceCheck) {
                leftRotatePieceCheck = rotateIndex
            }
        }
        leftRotateOverlap = Math.abs(leftPieceCheck - leftRotatePieceCheck)
        coors[0] = coors[0] + leftRotateOverlap
        // console.log(leftPieceCheck)
        // console.log(leftRotatePieceCheck)
    }   

    playPiece = rotatedPiece
    console.log(playPiece)
    draw(playPiece, true);
    rightPieceCheck = 0
    rightRotatePieceCheck = 0
    leftPieceCheck = 0
    leftRotatePieceCheck = 0
    rightRotateOverlap = 0
    leftRotateOverlap = 0
    
}

spawnPiece();
left();
left();
left();
left();
left();
left();
// right();
// right();
// right();
// right();
// right();
rotate();
rotate();
rotate();
rotate();
left();
left();
left();
// rotate();
// rotate();
// rotate();
// rotate();
