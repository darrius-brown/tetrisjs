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

    const Piece = class {
        constructor(display, color, startingCoordinates) {
            this.display = display
            this.color = color
            this.startingCoordinates = startingCoordinates
        }
    }

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

    const blank_piece = new Piece([[0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]],
            'none',
            [0,0]
        )

    const pieces = [i, o, s, z, l, j, t]

    let playPiece
    let coordinatesOfFragementsOnBoard = []

    const spawnPiece = () => {
        const randomNumberGenerater = () => {
            return Math.floor(Math.random() * pieces.length)
        }
        const randomNumber = randomNumberGenerater()  
        const selectedPiece = pieces[randomNumber]
        playPiece = {
                    display: selectedPiece.display,
                    coordinates: selectedPiece.startingCoordinates
                    }
        draw(playPiece, true)
    }

    const draw = (piece, bool) => {
        for (let i = 0; i < piece.display.length; i++) {
            for (let j = 0; j < piece.display[i].length; j++) {
                if (piece.display[i][j] < 0) {
                board[piece.coordinates[1] + i][piece.coordinates[0] + j] = piece.display[i][j]
                coordinatesOfFragementsOnBoard.push([piece.coordinates[1] + i, piece.coordinates[0] + j])
                    if (bool === false) {
                        board[piece.coordinates[1] + i][piece.coordinates[0] + j] = 0 
                    }
                }
            }
        }
        console.log(coordinatesOfFragementsOnBoard)
        if (bool === true) {
            renderBoard()
        }
    };

    const down = () => {
        draw(playPiece, false)
        playPiece.coordinates[1] += 1
        draw(playPiece, true)
    }

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
    spawnPiece();
})