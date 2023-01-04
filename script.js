// DOM elements 
const body = document.body;
const gameboardOutput =document.querySelector('.gameboard-output')
const gameboardSquares = document.querySelectorAll('.gameboard-ranks-files')

// add loop to iterate over all gameboard squares
window.addEventListener('DOMContentLoaded', event => {
    // add event listener to all squares
gameboardSquares.forEach(gameboardSquare => {
gameboardSquare.addEventListener('click', (event => {
    const squareId = event.target.id; 
    gameboard.addMove(squareId)
}))

})

})
// body.removeChild(gameboardOutput)

// open menu dialog 
const dialog = document.getElementById('my-dialog')
function openDialog() {
dialog.showModal();
}
function closeDialog() {
    dialog.close();
}





// gameboard object convert to module 
const gameboard = (function() {
    // squares are labelled a, b, c for columns and 1,2,3 for rows
    let ranksAndFilesAndMarker = [];
    let gameboardStructure = [
    ['','',''],
    ['','',''],
    ['','',''],
    ];

    return {
        // adds move both arrays above with constraints
    addMove: function(position,marker) {
const move = addMove(position,marker)

// check that position is not played on yet
for (let i = 0; i < ranksAndFilesAndMarker.length; i++) {
if (move.position === ranksAndFilesAndMarker[i].position) {
    alert('Position is marked already! Choose another square');

// check if moves marker matches the last marker in gameboard array
if (ranksAndFilesAndMarker[ranksAndFilesAndMarker.length -1].marker === PlayerHub.getPlayer(0).marker) {
    Gameflow.promptPlayer2ToMakeMove()
} else if (ranksAndFilesAndMarker[ranksAndFilesAndMarker.length -1].marker === PlayerHub.getPlayer(1).marker) {
    Gameflow.promptPlayer1ToMakeMove()
}



return; 
    
}    

}

ranksAndFilesAndMarker.push(move);

// check and assign marker to row a
if (move.position === 'a1') {
gameboardStructure[0].shift();
gameboardStructure[0].unshift(move.marker)

}
if (move.position === 'a2') { 
gameboardStructure[0].splice(1,1,move.marker);
}
if (move.position === 'a3') {
    gameboardStructure[0][2] = move.marker;
}

// check and assign marker to row b
if (move.position === 'b1') {
    gameboardStructure[1][0] = move.marker;
}
if (move.position === 'b2') {
    gameboardStructure[1][1] = move.marker;
}
if (move.position === 'b3') {
    gameboardStructure[1][2] = move.marker;
}

// check and assign marker to row c
if (move.position === 'c1') {
    gameboardStructure[2][0] = move.marker;
}
if (move.position === 'c2') {
    gameboardStructure[2][1] = move.marker;
}
if (move.position === 'c3') {
    gameboardStructure[2][2] = move.marker;
}


    },

    checkWin: function() {
const player1 =PlayerHub.getPlayer(0) || PlayerHub.getPlayer(1);
const player2 =PlayerHub.getPlayer(1);


// loop through rows and check for a marker 3 in a rowfor player 1
for (let i = 0;i <3;i++) {
    if (gameboardStructure[i][0] === player1.marker &&
gameboardStructure[i][1] === player1.marker  &&
gameboardStructure[i][2] === player1.marker) {
    alert(`${player1.name} is the winner!`)
}
}
// check columns for 3 in a row 
for (let i = 0; i < 3; i++) {
if (gameboardStructure[0][i] === player1.marker &&
    gameboardStructure[1][i] === player1.marker &&
    gameboardStructure[2][i] === player1.marker) {
        alert(`${player1.name} is the winner!`)
    }
}
// check diagonals for 3 in a row top left to bottom right
if (gameboardStructure[0][0] === player1.marker &&
    gameboardStructure[1][1] === player1.marker &&
    gameboardStructure[2][2] === player1.marker) {
        alert(`${player1.name} is the winner!`)
    }
// check diagonals for 3 in a row top right to bottom left
if (gameboardStructure[0][2] === player1.marker &&
    gameboardStructure[1][1] === player1.marker &&
    gameboardStructure[2][0] === player1.marker) {
        alert(`${player1.name} is the winner!`)
        
    }





// loop through rows and check for a marker 3 in a rowfor player 2
for (let i = 0;i <3;i++) {
    // check rows for player 2 markers for 3 in a row
if (gameboardStructure[i][0] === player2.marker &&
gameboardStructure[i][1] === player2.marker  &&
gameboardStructure[i][2] === player2.marker) {
    alert(`${player2.name} is the winner!`)
}
}
// check columns for 3 in a row 
for (let i = 0; i < 3; i++) {
if (gameboardStructure[0][i] === player2.marker &&
    gameboardStructure[1][i] === player2.marker &&
    gameboardStructure[2][i] === player2.marker) {
        alert(`${player2.name} is the winner!`)
    }
}
// check diagonals for 3 in a row top left to bottom right
if (gameboardStructure[0][0] === player2.marker &&
    gameboardStructure[1][1] === player2.marker &&
    gameboardStructure[2][2] === player2.marker) {
        alert(`${player2.name} is the winner!`)
    }
// check diagonals for 3 in a row top right to bottom left
if (gameboardStructure[0][2] === player2.marker &&
    gameboardStructure[1][1] === player2.marker &&
    gameboardStructure[2][0] === player2.marker) {
        alert(`${player2.name} is the winner!`)
        
    }





    },
    getSingleMove: function(index) {
return ranksAndFilesAndMarker[index];
    },
    getAllMoves: function() {
        return ranksAndFilesAndMarker;
    },
    getGameboardStructure: function() {
        return gameboardStructure;
    }
    }
})();

console.log(gameboard.getGameboardStructure());
// factory function for add move method in gameboard object
function addMove(position,marker) {

    return {
        position: position,
        marker: marker,

    }
}

// create player factory functions
function createPlayer(name, marker) {
    let _marker = marker;

    return {
        name: name,
        marker: marker,
        ranksAndFiles: [],
        getMarker: function() {
            return this.marker;
        },
        setMarker: function(marker) {
            marker = marker;
        },
        setRanksAndFiles: function(position) {
            this.ranksAndFiles.push(position);
        },
        getRanksAndFiles: function() {
            return this.ranksAndFiles;
        },

    }
}

// module to store gameflow instances
const Gameflow = (function() {

return {

// takes input from prompt user function to add to playerhub module    
    addPlayerToPlayerHub: function(name, marker) {
        PlayerHub.addPlayer(name, marker)
    
    },

    promptUser: function() {
    const nameInput = prompt('Name', '');
    const markerInput = prompt('Marker', '');

    this.addPlayerToPlayerHub(nameInput, markerInput)

},
// function to prompt user to make a move 
 promptPlayer1ToMakeMove: function() {
    const input = prompt(`${PlayerHub.getPlayer(0).name} pick a square', '`);
    const marker = PlayerHub.getPlayer(0).getMarker();
    
    PlayerHub.getPlayer(0).setRanksAndFiles(input)
    gameboard.addMove(input, marker)
    },
     promptPlayer2ToMakeMove: function() {
        const input = prompt(`${PlayerHub.getPlayer(1).name} pick a square', '`);
        const marker = PlayerHub.getPlayer(1).getMarker();
    
        PlayerHub.getPlayer(1).setRanksAndFiles(input)
        gameboard.addMove(input, marker)
        
        
        },





}

})();

// module to store player object instance from factory
var PlayerHub = (function() {
    let playersArray = [];

    function privateMethod() {
         console.log(playersArray);
    }

return {

    addPlayer: function(name, marker) {
        const player = createPlayer(name, marker);
      playersArray.push(player);  
      
    },
    getPlayer: function(index)  {
        return playersArray[index];
    },
    getAllPlayers: function() {
        return playersArray;
    },

}
    })();



// // function to get player 1 info
// function promptUser() {
//     const nameInput = prompt('Name', '');
//     const markerInput = prompt('Marker', '');

//     addPlayerToPlayerHub(nameInput, markerInput)

// }
// function addPlayerToPlayerHub(name, marker) {
//     PlayerHub.addPlayer(name, marker)

// }

// prompt user for name and marker
PlayerHub.addPlayer('Mark', 'X')
PlayerHub.addPlayer('Spencer', 'O')

// prompt player to  make a move on the gameboard
// function promptPlayer1ToMakeMove() {
// const input = prompt(`${PlayerHub.getPlayer(0).name} pick a square', '`);
// const marker = PlayerHub.getPlayer(0).getMarker();

// PlayerHub.getPlayer(0).setRanksAndFiles(input)
// gameboard.addMove(input, marker)
// };
// function promptPlayer2ToMakeMove() {
//     const input = prompt(`${PlayerHub.getPlayer(1).name} pick a square', '`);
//     const marker = PlayerHub.getPlayer(1).getMarker();

//     PlayerHub.getPlayer(1).setRanksAndFiles(input)
//     gameboard.addMove(input, marker)
    
    
//     }

    // call the user to input name and marker
// Gameflow.promptUser()
// Gameflow.promptUser()


// Gameflow.promptPlayer1ToMakeMove();
// Gameflow.promptPlayer2ToMakeMove()
// Gameflow.promptPlayer1ToMakeMove();
// Gameflow.promptPlayer2ToMakeMove()
// Gameflow.promptPlayer1ToMakeMove();
// gameboard.checkWin()
// Gameflow.promptPlayer2ToMakeMove()
// gameboard.checkWin()

// dummy play moves
// gameboard.addMove('c1', 'O')
// gameboard.addMove('b2', 'O')
// gameboard.addMove('a3', 'O')
gameboard.checkWin()