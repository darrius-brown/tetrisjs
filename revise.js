document.addEventListener('DOMContentLoaded', function () {
    const Piece = class {
        constructor(display, color, startingCoordinates) {
            this.display = display
            this.color = color
            this.startingCoordinates = startingCoordinates
        }
    }

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

    const renderBoard = () => {
        boardContainer.innerHTML = '';

        for (let row = 0; row < board.length; row++) {
            const rowElement = document.createElement('div');
            rowElement.className = 'row';

            for (let col = 0; col < board[row].length; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.innerText = board[row][col];
                rowElement.appendChild(cell);
            }

            boardContainer.appendChild(rowElement);
        }
    };

    renderBoard();

    const i = new Piece([[0, -1, 0, 0],
    [0, -1, 0, 0],
    [0, -1, 0, 0],
    [0, -1, 0, 0]],
        'blue',
        [3, 0]
    )

    const o = new Piece([[0, 0, 0, 0],
    [0, -2, -2, 0],
    [0, -2, -2, 0],
    [0, 0, 0, 0]],
        'yellow',
        [3, -1]
    )

    const s = new Piece([[0, 0, 0, 0],
    [0, 0, -3, -3],
    [0, -3, -3, 0],
    [0, 0, 0, 0]],
        'red',
        [3, -1]
    )

    const z = new Piece([[0, 0, 0, 0],
    [0, -4, -4, 0],
    [0, 0, -4, -4],
    [0, 0, 0, 0]],
        'green',
        [3, -1]
    )

    const l = new Piece([[0, -5, 0, 0],
    [0, -5, 0, 0],
    [0, -5, -5, 0],
    [0, 0, 0, 0]],
        'orange',
        [3, 0]
    )

    const j = new Piece([[0, 0, -6, 0],
    [0, 0, -6, 0],
    [0, -6, -6, 0],
    [0, 0, 0, 0]],
        'pink',
        [3, 0]
    )

    const t = new Piece([[0, 0, 0, 0],
    [0, -7, -7, -7],
    [0, 0, -7, 0],
    [0, 0, 0, 0]],
        'purple',
        [2, -1]
    )

    const pieces = [i, o, s, z, l, j, t]
    let rightEdgeOfBoard = board[0].length - 1
    let leftEdgeOfBoard = 0
    let bottomEdgeOfBoard = board.length - 1
    let playPiece
    let coordinatesOfFragementsOnBoard = []
    let coordinatesAroundFragments
    let movementPossibilities = {}

    const spawnPiece = () => {
        movementPossibilities = {}
        const randomNumberGenerater = () => {
            return Math.floor(Math.random() * pieces.length)
        }
        let randomNumber = randomNumberGenerater()
        playPiece = {
            display: pieces[randomNumber].display.slice(),
            coordinates: pieces[randomNumber].startingCoordinates.slice() 
        },

            draw(playPiece, true, false)
    }

    const endPiece = () => {
        draw(playPiece, true, true);
        clearRows();
        spawnPiece();
    }

    const draw = (piece, bool, endingPiece) => {
        const boardPrep = () => {
            coordinatesOfFragementsOnBoard = []
            outerloop: for (let i = 0; i < piece.display.length; i++) {
                for (let j = 0; j < piece.display[i].length; j++) {
                    if (piece.display[i][j] < 0) {
                        if (piece.coordinates[0] + j > rightEdgeOfBoard) {
                            for (let k = 0; k < coordinatesOfFragementsOnBoard.length; k++) {
                                board[coordinatesOfFragementsOnBoard[0][0]][coordinatesOfFragementsOnBoard[0][1]] = 0
                            }
                            piece.coordinates[0] -= 1
                            boardPrep();
                            break outerloop;
                        }
                        if (piece.coordinates[0] + j < leftEdgeOfBoard) {
                            for (let k = 0; k < coordinatesOfFragementsOnBoard.length; k++) {
                                board[coordinatesOfFragementsOnBoard[0][0]][coordinatesOfFragementsOnBoard[0][1]] = 0
                            }
                            piece.coordinates[0] += 1
                            boardPrep();
                            break outerloop;
                        }
                        if (endingPiece === true) {
                            board[piece.coordinates[1] + i][piece.coordinates[0] + j] = Math.abs(piece.display[i][j])
                        } else {
                            board[piece.coordinates[1] + i][piece.coordinates[0] + j] = piece.display[i][j]
                        }
                        if (bool === true) {
                            coordinatesOfFragementsOnBoard.push([piece.coordinates[1] + i, piece.coordinates[0] + j])
                        }
                        if (bool === false) {
                            board[piece.coordinates[1] + i][piece.coordinates[0] + j] = 0
                        }
                    }
                }
            }    
        }

        boardPrep()

        if (bool === true) {
            checkAroundFragments()
            checkMovementPossibilities()
            renderBoard()
        }
    };

    const down = (canExecute) => {
        if (!canExecute) {
            endPiece();
            return
        }
        draw(playPiece, false, false)
        playPiece.coordinates[1] += 1
        draw(playPiece, true, false)
    }

    const right = (canExecute) => {
        if (!canExecute) {
            return
        }
        draw(playPiece, false, false)
        playPiece.coordinates[0] += 1
        draw(playPiece, true, false)
    }

    const left = (canExecute) => {
        if (!canExecute) {
            return
        }
        draw(playPiece, false, false)
        playPiece.coordinates[0] -= 1
        draw(playPiece, true, false)
    }

    const rotate = () => {
        draw(playPiece, false, false)
        let transposedPiece = playPiece.display[0].map((_, colIndex) => playPiece.display.map(row => row[colIndex]));
        let rotatedPiece = transposedPiece.map(row => row.reverse());
        playPiece.display = rotatedPiece;
        draw(playPiece, true, false);
    }

    const checkMovementPossibilities = () => {
        Object.entries(coordinatesAroundFragments).forEach(([direction, coordinate]) => {
            const hasBlockage = coordinate.some(coords => {
                if (coords[0] > bottomEdgeOfBoard) {
                    return true
                }

                if (coords[1] > rightEdgeOfBoard) {
                    return true
                }

                if (coords[1] < leftEdgeOfBoard) {
                    return true
                }
                return board[coords[0]][coords[1]] > 0
            });
            movementPossibilities[direction] = !hasBlockage;
        });
    }

    const checkAroundFragments = () => {
        coordinatesAroundFragments = {
            right: coordinatesOfFragementsOnBoard.map(([y, x]) => [y, x + 1]),
            left: coordinatesOfFragementsOnBoard.map(([y, x]) => [y, x - 1]),
            bottom: coordinatesOfFragementsOnBoard.map(([y, x]) => [y + 1, x])
        }
    }

    const clearRows = () => {
        for (let i = 0; i < board.length; i++) {
            let clearable = board[i].every(num => num > 0)
            if (clearable === true) {
                index = board.indexOf(i)
                board.splice(index, 1)   
                board.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) 
            }
        }
    }

    // setInterval(() => {
    //     down(movementPossibilities.bottom);
    // }, 1000);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            left(movementPossibilities.left);
        } else if (event.key === 'd' || event.key === 'D') {
            right(movementPossibilities.right);
        } else if (event.key === 's' || event.key === 'S') {
            down(movementPossibilities.bottom);
        } else if (event.key === 'w' || event.key === 'W') {
            rotate();
        }

    });
    spawnPiece();

})