document.addEventListener('DOMContentLoaded', function () {
    const Piece = class {
        constructor(display, color, startingCoordinates, spawnPoint) {
            this.display = display
            this.color = color
            this.startingCoordinates = startingCoordinates
            this.spawnPoint = spawnPoint
        }
    }

    let board = [
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
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    const boardContainer = document.getElementById('board-container');
    const nextPieceContainer = document.getElementById('next-piece-container');


    const colors = ['blue', 'yellow', 'red', 'green', 'orange', 'pink', 'purple']
    const renderBoard = () => {
        boardContainer.innerHTML = '';

        for (let row = 0; row < board.length; row++) {
            const rowElement = document.createElement('div');
            rowElement.className = 'row';

            for (let col = 0; col < board[row].length; col++) {
                const cell = document.createElement('div');
                cell.className = 'cell';
                cell.innerText = board[row][col];
                cell.style.color = 'transparent'
                cell.style.userSelect = 'none';
                cell.style.MozUserSelect = 'none';
                cell.style.msUserSelect = 'none';

                if (board[row][col] !== 0) {
                    cell.style.backgroundColor = colors[(Math.abs(board[row][col]) - 1)];
                } else {
                    cell.style.backgroundColor = 'black'
                }
                if (board[row][col] !== 0) {
                    cell.style.backgroundColor = 'none'
                } else {
                    cell.style.borderColor = '#333333'
                }
                rowElement.appendChild(cell);
            }

            boardContainer.appendChild(rowElement);
        }
    };

    const renderNextPieces = (nextPieces) => {
        nextPieceContainer.innerHTML = '';

        for (let i = 0; i < nextPieces.length; i++) {
            const nextPieceElement = document.createElement('div');
            nextPieceElement.className = 'next-piece';

            for (let row = 0; row < pieces[nextPieces[i]].display.length; row++) {
                const rowElement = document.createElement('div');
                rowElement.className = 'next-piece-row';

                for (let col = 0; col < pieces[nextPieces[i]].display[row].length; col++) {
                    const displayRow = row;
                    const displayCol = col;
                    const cell = document.createElement('div');
                    cell.className = 'next-piece-cell';
                    cell.innerText = pieces[nextPieces[i]].display[displayCol][displayRow];
                    cell.style.color = 'transparent';
                    cell.style.userSelect = 'none';
                    cell.style.MozUserSelect = 'none';
                    cell.style.msUserSelect = 'none';
                    cell.style.borderColor = 'black';
                    rowElement.appendChild(cell);

                    if (parseInt(cell.innerText) !== 0) {
                        cell.style.backgroundColor = colors[Math.abs(parseInt(cell.innerText)) - 1];
                    } else {
                        cell.style.backgroundColor = 'black';
                    }
                }

                nextPieceElement.appendChild(rowElement);
            }

            nextPieceContainer.appendChild(nextPieceElement);
        }
    };

    renderBoard();

    const i = new Piece([[0, -1, 0, 0],
    [0, -1, 0, 0],
    [0, -1, 0, 0],
    [0, -1, 0, 0]],
        'blue',
        [3, 0],
        [[0, 4]]
    )

    const o = new Piece([[0, 0, 0, 0],
    [0, -2, -2, 0],
    [0, -2, -2, 0],
    [0, 0, 0, 0]],
        'yellow',
        [3, 0],
        [[0, 4], [0, 5]]
    )

    const s = new Piece([[0, 0, 0, 0],
    [0, 0, -3, -3],
    [0, -3, -3, 0],
    [0, 0, 0, 0]],
        'red',
        [3, 0],
        [[0, 4], [0, 5]]
    )

    const z = new Piece([[0, 0, 0, 0],
    [0, -4, -4, 0],
    [0, 0, -4, -4],
    [0, 0, 0, 0]],
        'green',
        [3, 0],
        [[0, 5], [0, 6]]
    )

    const l = new Piece([[0, -5, 0, 0],
    [0, -5, 0, 0],
    [0, -5, -5, 0],
    [0, 0, 0, 0]],
        'orange',
        [3, 0],
        [[0, 4], [0, 5]]
    )

    const j = new Piece([[0, 0, -6, 0],
    [0, 0, -6, 0],
    [0, -6, -6, 0],
    [0, 0, 0, 0]],
        'pink',
        [3, 0],
        [[0, 4], [0, 5]]
    )

    const t = new Piece([[0, 0, 0, 0],
    [0, -7, -7, -7],
    [0, 0, -7, 0],
    [0, 0, 0, 0]],
        'purple',
        [2, 0],
        [[0, 5]]
    )

    const pieces = [i, o, s, z, l, j, t]
    let movementSpeed = 1000
    let topOfBoard = 0
    let rightEdgeOfBoard = board[0].length - 1
    let leftEdgeOfBoard = 0
    let bottomEdgeOfBoard = board.length - 1
    let playPiece
    let coordinatesOfFragementsOnBoard = []
    let coordinatesAroundFragments
    let movementPossibilities = {}
    let piecesUpNext = []

    const startGame = () => {
        createPiecesUpNext();
        spawnPiece();
    }

    const reset = () => {
        movementSpeed = 1000;
        coordinatesOfFragementsOnBoard = [];
        coordinatesAroundFragments = undefined;
        movementPossibilities = {};
        piecesUpNext = [];
        playPiece = undefined;
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
    };

    const newGame = () => {
        reset();
        startGame();
    };

    const randomNumberGenerater = () => {
        return Math.floor(Math.random() * pieces.length);
    }

    const checkIfSpawnPossible = () => {
        if (coordinatesOfFragementsOnBoard.some(coord =>
            pieces[piecesUpNext[0]].spawnPoint.some(spawnCoord =>
                spawnCoord[0] === coord[0] && spawnCoord[1] === coord[1]
            ))) {
            newGame();
        } else {
            spawnPiece();
        }
    }

    const createPiecesUpNext = () => {
        while (piecesUpNext.length < 5) {
            let randomNumber = randomNumberGenerater();
            piecesUpNext.push(randomNumber);
        }
    }

    const spawnPiece = () => {
        movementPossibilities = {}
        coordinatesOfFragementsOnBoard = []
        playPiece = {
            display: pieces[piecesUpNext[0]].display.slice(),
            coordinates: pieces[piecesUpNext[0]].startingCoordinates.slice()
        },
            draw(playPiece);
        let randomNumber = randomNumberGenerater()
        piecesUpNext.splice(0, 1)
        piecesUpNext.push(randomNumber)
    }

    const endPiece = () => {
        coordinatesOfFragementsOnBoard.forEach(([y, x]) => {
            board[y][x] = Math.abs(board[y][x])
        });
        clearRows();
        checkIfSpawnPossible();
    }

    const clearPiece = () => {
        if (coordinatesOfFragementsOnBoard.length === 0) {
            return
        } else {
            coordinatesOfFragementsOnBoard.forEach(([y, x]) => {
                board[y][x] = 0
            });
        }
        renderBoard();
    }



    const draw = (piece) => {
        clearPiece();
        const boardPrep = () => {
            coordinatesOfFragementsOnBoard = []
            outerloop: for (let i = piece.display.length - 1; i >= topOfBoard; i--) {
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
                        
                            board[piece.coordinates[1] + i][piece.coordinates[0] + j] = piece.display[i][j]
                        
                        coordinatesOfFragementsOnBoard.push([piece.coordinates[1] + i, piece.coordinates[0] + j])
                    }
                }
            }
        }

        boardPrep();
        checkAroundFragments();
        checkMovementPossibilities();
        renderBoard();
        renderNextPieces(piecesUpNext);
    };

    const down = (canExecute) => {
        if (!canExecute) {
            endPiece();
            console.log("piece ended")
            return
        }
        playPiece.coordinates[1] += 1
        draw(playPiece);
    }

    const fastDown = () => {
        while (movementPossibilities.bottom === true) {
            down(movementPossibilities.bottom)
        }
    }

    const right = (canExecute) => {
        if (!canExecute) {
            return
        }
        playPiece.coordinates[0] += 1
        draw(playPiece);
    }

    const left = (canExecute) => {
        if (!canExecute) {
            return
        }
   
        playPiece.coordinates[0] -= 1
        draw(playPiece);
    }

    const rotate = () => {
        let transposedPiece = playPiece.display[0].map((_, colIndex) => playPiece.display.map(row => row[colIndex]));
        let rotatedPiece = transposedPiece.map(row => row.reverse());
        playPiece.display = rotatedPiece;
        draw(playPiece);
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
        for (let i = board.length - 1; i >= 0; i--) {
            let clearable = board[i].every(num => num > 0)
            if (clearable === true) {
                board.splice(i, 1)
                board.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
                i++
            }
        }
    }

    // setInterval(() => {
    //     down(movementPossibilities.bottom);
    // }, movementSpeed);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'a' || event.key === 'A') {
            left(movementPossibilities.left);
        } else if (event.key === 'd' || event.key === 'D') {
            right(movementPossibilities.right);
        } else if (event.code === 'Space') {
            fastDown();
            endPiece();
        } else if (event.key === 'w' || event.key === 'W') {
            rotate();
        } else if (event.key === 's' || event.key === 'S') {
            down(movementPossibilities.bottom);
        } else if (event.key === 'ArrowLeft') {
            left(movementPossibilities.left);
        } else if (event.key === 'ArrowRight') {
            right(movementPossibilities.right);
        } else if (event.key === 'ArrowDown') {
            down(movementPossibilities.bottom);
        } else if (event.key === 'ArrowUp') {
            rotate();
        }
    })
    startGame();
})