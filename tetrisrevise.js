
document.addEventListener('DOMContentLoaded', function () {
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
const boardContainer = document.getElementById('board-container');

// Function to render the board array
const renderBoard = () => {
    boardContainer.innerHTML = ''; // Clear the board container

    for (let row = 0; row < board.length; row++) {
        const rowElement = document.createElement('div');
        rowElement.className = 'row';
        
        for (let col = 0; col < board[row].length; col++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.innerText = board[row][col]; // Display the value from the board array
            rowElement.appendChild(cell);
        }
        
        boardContainer.appendChild(rowElement);
    }
};

renderBoard();

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
let bottomOverlap = 0
let playPiece
let pieceX
let pieceY
let coors
let findBottom
let bottomIndex
let stack
let searchAdjustmentWhenBottomIndexIsOneActive
let bottomFragement = []
let endRequirement = 0

const findPiece = (element) => element < 0;

const findEndPiece = (element) => element > 0;

const startGame = () => {
    spawnPiece();
}

const spawnPiece = () => {
    coors = [4, 0];
    pieceX = 0;
    pieceY = 0;
    bottomOverlap = 0
    stack = false
    searchAdjustmentWhenBottomIndexIsOneActive = false
    playPiece =  pieces[Math.floor(Math.random() * pieces.length)].display
    draw(playPiece, true)
    bottomIndex = findPieceBottom()
}

const findPieceBottom = () => {
    bottomFragement = []
    for (let i = 3; i >= 0; i--) {
        findBottom = playPiece[i].findIndex(findPiece) 
        if (findBottom > -1) {
            for(const j in playPiece[i]) {
                if(playPiece[i][j] < 0) {
                    bottomFragement.push(parseInt(j) + coors[0])
                }
            }
            return i
        }
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
        for (let y = coors[1]; y < (coors[1] + 4) - bottomOverlap; y++) {
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
        renderBoard()
    }
}

const down = () => {
    for (let i = 0; i < board.length; i++) {
        if (board[19][i] < 0) {
            endPiece()
            return
        }
    }

    if (coors[1] >= 16 && bottomIndex < 3) {
        bottomOverlap = 3 - bottomIndex
    }
    draw(blank_piece, false);
    coors[1] += 1;
    draw(playPiece, true);
    if (stack === true) {
        endPiece();
        return
    }
    findPieceBottom();
    checkPieceEnd();
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
            if (playIndex > leftPieceCheck) {
                leftPieceCheck = playIndex
            }
            if(rotateIndex > leftRotatePieceCheck) {
                leftRotatePieceCheck = rotateIndex
            }
        }
        leftRotateOverlap = Math.abs(leftPieceCheck - leftRotatePieceCheck)
        coors[0] = coors[0] + leftRotateOverlap
    }   

    playPiece = rotatedPiece;
    bottomIndex = findPieceBottom()
    console.log(bottomFragement)
    draw(playPiece, true);
    rightPieceCheck = 0;
    rightRotatePieceCheck = 0;
    leftPieceCheck = 0;
    leftRotatePieceCheck = 0;
    rightRotateOverlap = 0;
    leftRotateOverlap = 0;
    
}

const checkPieceEnd = () => {
    checkArray = []
    checkHangingFragementArray = []
    boardYCheck = coors[1] + 4
    if (boardYCheck > 19) {
        return
    }
    for (const i in bottomFragement) {
        checkArray.push(board[boardYCheck][bottomFragement[i]])
        checkHangingFragementArray.push(board[boardYCheck - 1][bottomFragement[i]])
    }
    endRequirement = checkArray.findLastIndex(findEndPiece)
    endRequirementForHangingFragement = checkHangingFragementArray.findLastIndex(findEndPiece)
    console.log('coors: ' + coors + 'end requirement' + endRequirement + 'board y check ' + boardYCheck + 'bottom fragement ' + bottomFragement + 'check array' + checkArray + 'bottom index: ' + bottomIndex)
    if (endRequirement  < 0 && endRequirementForHangingFragement < 0) {
        return
    }
    if ((endRequirement > -1 && bottomIndex < 3) || (endRequirementForHangingFragement > -1 && bottomIndex < 3)) {
        bottomOverlap += 1
        stack = true
        if (bottomIndex === 1 && searchAdjustmentWhenBottomIndexIsOneActive === false) {
            stack = false
            searchAdjustmentWhenBottomIndexIsOneActive = true
        }
    } else {
        endPiece();
    }
}

const endPiece = () => {s
    let playPieceConvertedToEndPiece = [[],[],[],[]]
    for (const i in playPiece) {
        for (const j in playPiece[i]) {
            if (playPiece[i][j] < 0) {
                playPieceConvertedToEndPiece[i].push(Math.abs(playPiece[i][j])) 
            } else {
                playPieceConvertedToEndPiece[i].push(0)
            }
        }
    }
    draw(playPieceConvertedToEndPiece, true);
    spawnPiece();
}

const fastDown = () => {
    //This function will drop the piece to the bottom of the board(or piece) directly below it instantly
    //Have to loop down the board and find the first instance when you find a positive number
        //Only loop through the 4 spaces under the playpiece 
        //then you draw the piece right ontop of 
}

// setInterval(() => {
//     down();
// }, 1000);

document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A' ) {
        left();
    } else if (event.key === 'd' || event.key === 'D') {
        right();
    } else if (event.key === 's' || event.key === 'S') {
        down();
    } else if (event.key === 'w' || event.key === 'W') {
        rotate();
    }

});

startGame();
});