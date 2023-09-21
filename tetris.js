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
    [0,0,0,0,0,0,0,0,0,0],
    ]

l_piece =[[0,0,0,0,2,0,0,0,0,0],
          [0,0,0,0,2,0,0,0,0,0],
          [0,0,0,0,2,2,0,0,0,0]]

const printBoard = () => {
    for(i = 0; i < board.length; i++) {
        console.log(board[i] + i)
    }
}

const spawnPiece = (piece) => {
    for (i = 0; i < piece.length; i++) {
        board[i] = piece[i]
    }
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
    
    let topPiece = findStartPiece()
    let endPiece = findEndPiece()

    for (i = endPiece ; i >= topPiece; i--) {
        board[i + 1] = board[i]
    }

    board[topPiece] = [0,0,0,0,0,0,0,0,0,0,0]
 
}

const rotatePiece = () => {

}