board = [
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],    
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0]
    ]

l_piece =   [[0,0,0,0,0,2,0,0,0,0,0],
            [0,0,0,0,0,2,0,0,0,0,0],
            [0,0,0,0,0,2,0,0,0,0,0],
            [0,0,0,0,0,2,2,0,0,0,0]]

const dropPiece = (piece) => {
    board[0] = piece[0]
    board[1] = piece[1]
    board[2] = piece[2]
    board[3] = piece[3]
}

const idlePieceMovement = () => {
    const findPiece = () => {
        for(i = 0; i <= board.length; i++) {
            result = board[i].includes(2)
            console.log('includes 2:' + result)
        }
        
    }
    result = board.filter(findPiece)
    console.log(result)
    //Return the indexes of board where 2s live
}

dropPiece(l_piece)
idlePieceMovement(board)
