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

l_piece = [ [0,2,0,0],
            [0,2,0,0],
            [0,2,2,0],
            [0,0,0,0]]
halfPoint = Math.floor(board[0].length / 2) - 1;
let pieceX = 0;
let pieceY = 0;
coors = [halfPoint, 0];
startX = coors[0];
endX = startX + 4;
startY = coors[1];
endY = startY + 4;
const printBoard = () => {
    for (const index in board) {
        console.log(board[index] + index)
    }
}

const draw = (piece) => {
    for(let x = coors[0]; x < coors[0] + 4; x++) {
        pieceY = 0
        for (let y = coors[1]; y < coors[1] + 4; y++) {
            board[y][x] = piece[pieceY][pieceX]
            pieceY += 1
        }
        pieceX += 1
    }
    pieceX = 0;
    pieceY = 0;

   printBoard();
}

const down = () => {
    //Settings the area above the piece to blank
    for (let x = coors[0]; x < coors[0] + 4; x++) {
        board[coors[1]][x] = 0
        pieceY += x
    }
    
    //Adjust coordinates, then redraw
    coors[1] += 1
    draw(l_piece)
}

draw(l_piece)
down()
down()
