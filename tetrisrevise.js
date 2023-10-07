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

const i = new Piece([   [0, -1, 0, 0],
                        [0, -1, 0, 0],
                        [0, -1, 0, 0],
                        [0, -1, 0, 0]],
                        'blue')

const o = new Piece([   [0, 0, 0, 0],
                        [0, -2, -2, 0],
                        [0, -2, -2, 0],
                        [0, 0, 0, 0]],
                        'yellow')

const s = new Piece([   [0, 0, 0, 0],
                        [0, 0, -3, -3],
                        [0, -3, -3, 0],
                        [0, 0, 0, 0]],
                        'red')

const z = new Piece([   [0, 0, 0, 0],
                        [0, -4, -4, 0],
                        [0, 0, -4, -4],
                        [0, 0, 0, 0]],
                        'green')

const l = new Piece([   [0, -5, 0, 0],
                        [0, -5, 0, 0],
                        [0, -5, -5, 0],
                        [0, 0, 0, 0]],
                        'orange')
    
const j = new Piece([   [0, 0, -6, 0],
                        [0, 0, -6, 0],
                        [0, -6, -6, 0],
                        [0, 0, 0, 0]],
                        'pink')
                        
const t = new Piece([   [0, 0, 0, 0],
                        [0, -7, -7, -7],
                        [0, 0, -7, 0],
                        [0, 0, 0, 0]],
                        'purple')

const blank_piece = [[0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0],
                     [0, 0, 0, 0]];

const pieces = [i, o, s, z, l, j, t]
let rightPieceCheck = 0;
let rightRotatePieceCheck = 0;
let leftPieceCheck = 0;
let leftRotatePieceCheck = 0;
let rightOverlap = 0
let leftOverlap = 0
let rightRotateOverlap = 0
let leftRotateOverlap = 0
let playPiece
let pieceX
let pieceY
let coors
let startX  
let endX 
let startY
let endY  
let findBottom
let bottomIndex
let bottomFragement = []

const findPiece = (element) => element < 0;

const start = () => {
    //This function will start the game
}

const spawnPiece = () => {
    coors = [4, 0];
    startX = coors[0];
    endX = startX + 4;
    startY = coors[1];
    endY = startY + 4;
    pieceX = 0;
    pieceY = 0;
    playPiece =  pieces[Math.floor(Math.random() * pieces.length)].display
    draw(playPiece, true)
    bottomIndex = findPieceBottom()
}

const findPieceBottom = () => {
    for (let i = 3; i >= 0; i--) {
        findBottom = playPiece[i].findIndex(findPiece) 
        if (findBottom > -1) {
            for(const j in playPiece[i]) {
                if(playPiece[i][j] < 0) {
                    bottomFragement.push(parseInt(j))
                }
            }
            return i
        }
    }
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
    console.log(coors)
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

    playPiece = rotatedPiece;
    draw(playPiece, true);
    bottomIndex = findPieceBottom()
    rightPieceCheck = 0;
    rightRotatePieceCheck = 0;
    leftPieceCheck = 0;
    leftRotatePieceCheck = 0;
    rightRotateOverlap = 0;
    leftRotateOverlap = 0;
    
}

const checkPieceEnd = () => {

}

const fastDown = () => {
    //This function will drop the piece to the bottom of the board(or piece) directly below it instantly
}



spawnPiece();
console.log(bottomFragement)
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();
down();