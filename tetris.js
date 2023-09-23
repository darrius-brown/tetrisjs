board = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
    ]

l_piece = [  [0,2,0,0],
             [0,2,0,0],
             [0,2,2,0],
             [0,0,0,0]]

const leftEdge = 0
const rightEdge = board[0].length - 1
let topPiece
let endPiece
let checkLeftEdge = []
let checkRightEdge = []
let piecePosition = []

const printBoard = () => {
    for(i = 0; i < board.length; i++) {
        console.log(board[i] + i)
    }
}

const spawnPiece = (piece) => {
    for (i = 0; i < piece.length; i++) {
        board[i] = piece[i]
    }
    topPiece = findStartPiece()
    endPiece = findEndPiece()
    printBoard()
}

const findStartPiece = () => {
    for(i = 0; i < board.length; i++) {
        result = board[i].includes(2)
        if (result === true) {
            return i
        }
    } 
}

const findEndPiece = () => {
    for(i = board.length - 1; i > 0; i--) {
        result = board[i].includes(2)
        if (result === true) {
            return i
        }
    } 
}

const idlePieceMovement = () => {
    
    topPiece = findStartPiece()
    endPiece = findEndPiece()

    for (i = endPiece ; i >= topPiece; i--) {
        board[i + 1] = board[i]
    }

    board[topPiece] = [0,0,0,0,0,0,0,0,0,0,0]
    printBoard()
}

const moveLeft = () => {
    
    for (i = endPiece ; i >= topPiece; i--) {
        checkLeftEdge.push(board[i][leftEdge])
    }

    if (checkLeftEdge.includes(2)) {
        console.log('action not possible')
        checkLeftEdge = []
        return
    }

    for (i = endPiece ; i >= topPiece; i--) {
        board[i].shift()
        board[i].push(0)
    }

    printBoard()
}

const moveRight = () => {
    
    for (i = endPiece ; i >= topPiece; i--) {
        checkRightEdge.push(board[i][rightEdge])
    }

    if (checkRightEdge.includes(2)) {
        console.log('action not possible')
        checkRightEdge = []
        return
    }

    for (i = endPiece ; i >= topPiece; i--) {
        board[i].pop()
        board[i].unshift(0)
    }
    printBoard()
}

function rotatePiece() {
    for (i = endPiece ; i >= topPiece; i--) {
        piecePosition.unshift(board[i])
    }
    
    let transposedPiece = piecePosition[0].map((_, colIndex) => piecePosition.map(row => row[colIndex]));
    piecePosition = []
    let rotatedPiece = transposedPiece.map(row => row.reverse());
    
    console.log('t piece' + transposedPiece)
    console.log('r piece' +rotatedPiece)
}

spawnPiece(l_piece)
moveLeft()
moveLeft()
idlePieceMovement()
idlePieceMovement()

