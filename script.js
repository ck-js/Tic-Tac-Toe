// // DOM elements 
// const body = document.body;
// const gameboardOutput =document.querySelector('.gameboard-output')
// const gameboardSquares = document.querySelectorAll('.gameboard-ranks-files')

// // add loop to iterate over all gameboard squares
// window.addEventListener('DOMContentLoaded', event => {
//     // add event listener to all squares
// gameboardSquares.forEach(gameboardSquare => {
// gameboardSquare.addEventListener('click', (event => {
//     const squareId = event.target.id; 
//     gameboard.addMove(squareId)
// }))

// })

// })
// // body.removeChild(gameboardOutput)

// function to open and close dialog modal form
const dialog = document.getElementById('my-dialog')
function openDialog() {
dialog.showModal();

// set focus on name input
const header = document.getElementById('dialog-header')
const input = document.getElementById('name-input')
input.focus();

startGameDialog.close();
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
// store rounds won
let player1WinCounter = 0;
    let player2WinCounter = 0;
    let roundCounter = 0;

    return {

        // increase the round counter 
        increaseRoundCounter: function() {
            roundCounter++;
            this.updateScoreboard();

        },



// clear the text content of DOM squares
clearSquareTextContent: function() {
    const gameboardSquares = document.querySelectorAll('.gameboard-ranks-files')
    gameboardSquares.forEach(gameboardSquare => {
        gameboardSquare.textContent = '';
    })

},

// clear the gameboard values to play again
clearGameboard: function() {
ranksAndFilesAndMarker.length = 0;
gameboardStructure.length = 0;

gameboardStructure = [
    ['','',''],
    ['','',''],
    ['','',''],
    ];
    this.clearSquareTextContent();


},

// update the scoreboard
updateScoreboard: function() {
    const player1Element = document.getElementById('scoreboard-p1')
    const player2Element = document.getElementById('scoreboard-p2')
    const roundCounterElement = document.getElementById('round-counter')


player1Element.textContent = ` ${PlayerHub.getPlayer(0).name}: ${player1WinCounter}`
    player2Element.textContent = ` ${PlayerHub.getPlayer(1).name}: ${player2WinCounter}`
roundCounterElement.textContent = `Round: ${roundCounter}`;
    
    
},

// DOM elements of gameboard squares
renderDOM: function() {
const body = document.body;
const gameboardOutput =document.querySelector('.gameboard-output')
const gameboardSquares = document.querySelectorAll('.gameboard-ranks-files')

// add loop to iterate over all gameboard squares
window.addEventListener('DOMContentLoaded', event => {
    // add event listener to all squares
gameboardSquares.forEach(gameboardSquare => {
gameboardSquare.addEventListener('click', (event => {
    const squareElement = event.target;
    const squareId = event.target.id; 
    const gameboardLength = this.getAllMoves().length;
    const player1 = PlayerHub.getPlayer(0);
    const player2 = PlayerHub.getPlayer(1);
// determine whose turn it is currently
    if (gameboardLength === 0) {

    gameboard.addMove(squareId, player1.marker)
squareElement.textContent = `${player1.marker}`

    }
    if (gameboardLength === 1) {

        gameboard.addMove(squareId, player2.marker)
    squareElement.textContent = `${player2.marker}`
    
        }
        if (gameboardLength === 2) {

            gameboard.addMove(squareId, player1.marker)
        squareElement.textContent = `${player1.marker}`
        
            }
            if (gameboardLength === 3) {
        
                gameboard.addMove(squareId, player2.marker)
            squareElement.textContent = `${player2.marker}`
            
                }
                if (gameboardLength === 4) {

                    gameboard.addMove(squareId, player1.marker)
                squareElement.textContent = `${player1.marker}`
                
                this.checkWin();
                    }
                    if (gameboardLength === 5) {
                
                        gameboard.addMove(squareId, player2.marker)
                    squareElement.textContent = `${player2.marker}`
                    
                    this.checkWin();
                        }






}))

})

})
// body.removeChild(gameboardOutput)

    },
    // update the gameboard nav with nae and marker
    updateNav: function() {
        const player1Element = document.getElementById('player-1')
        const player2Element = document.getElementById('player-2')

        player1Element.textContent = `${PlayerHub.getPlayer(0).name}: ${PlayerHub.getPlayer(0).marker}`
        player2Element.textContent = `${PlayerHub.getPlayer(1).name}: ${PlayerHub.getPlayer(1).marker}`
    },

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

    // update the counter variable and display on DOM
    player1WinCounter++;
    this.updateScoreboard()
    
}
}
// check columns for 3 in a row 
for (let i = 0; i < 3; i++) {
if (gameboardStructure[0][i] === player1.marker &&
    gameboardStructure[1][i] === player1.marker &&
    gameboardStructure[2][i] === player1.marker) {
        alert(`${player1.name} is the winner!`)

        // update the counter variable and display on DOM
    player1WinCounter++;
    this.updateScoreboard()
    }
}
// check diagonals for 3 in a row top left to bottom right
if (gameboardStructure[0][0] === player1.marker &&
    gameboardStructure[1][1] === player1.marker &&
    gameboardStructure[2][2] === player1.marker) {
        alert(`${player1.name} is the winner!`)

        // update the counter variable and display on DOM
    player1WinCounter++;
    this.updateScoreboard()
    }
// check diagonals for 3 in a row top right to bottom left
if (gameboardStructure[0][2] === player1.marker &&
    gameboardStructure[1][1] === player1.marker &&
    gameboardStructure[2][0] === player1.marker) {
        alert(`${player1.name} is the winner!`)

        // update the counter variable and display on DOM
    player1WinCounter++;
    this.updateScoreboard()
        
    }





// loop through rows and check for a marker 3 in a rowfor player 2
for (let i = 0;i <3;i++) {
    // check rows for player 2 markers for 3 in a row
if (gameboardStructure[i][0] === player2.marker &&
gameboardStructure[i][1] === player2.marker  &&
gameboardStructure[i][2] === player2.marker) {
    alert(`${player2.name} is the winner!`)

    // update the counter variable and display on DOM
    player2WinCounter++;
    this.updateScoreboard()
}
}
// check columns for 3 in a row 
for (let i = 0; i < 3; i++) {
if (gameboardStructure[0][i] === player2.marker &&
    gameboardStructure[1][i] === player2.marker &&
    gameboardStructure[2][i] === player2.marker) {
        alert(`${player2.name} is the winner!`)

        // update the counter variable and display on DOM
    player2WinCounter++;
    this.updateScoreboard()
    }
}
// check diagonals for 3 in a row top left to bottom right
if (gameboardStructure[0][0] === player2.marker &&
    gameboardStructure[1][1] === player2.marker &&
    gameboardStructure[2][2] === player2.marker) {
        alert(`${player2.name} is the winner!`)

        // update the counter variable and display on DOM
    player2WinCounter++;
    this.updateScoreboard()
    }
// check diagonals for 3 in a row top right to bottom left
if (gameboardStructure[0][2] === player2.marker &&
    gameboardStructure[1][1] === player2.marker &&
    gameboardStructure[2][0] === player2.marker) {
        alert(`${player2.name} is the winner!`)

        // update the counter variable and display on DOM
    player2WinCounter++;
    this.updateScoreboard()
        
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

    // fuction to play again 
    playAgain: function() {
gameboard.increaseRoundCounter();
gameboard.clearGameboard();

        
    },


// helper function to take form input to playerhub module
    addPlayerToPlayerHub: function(name, marker) {
        PlayerHub.addPlayer(name, marker)
    
    },

// function to handle form submit 
handleSubmit: function(event) {
    event.preventDefault();
// get form input data
const form = event.target;
const name = form.name.value;
// get value of checked radio button

// add form values to playerhub module
if (!PlayerHub.getPlayer(0)) {
    const marker = document.querySelector('input[name="marker"]:checked').value;
    // PlayerHub.addPlayer(name,marker)
    this.addPlayerToPlayerHub(name,marker)
}else if (PlayerHub.getPlayer(0).marker === 'X') {
    // PlayerHub.addPlayer(name,'O');
    this.addPlayerToPlayerHub(name,'O')
} else if (PlayerHub.getPlayer(0).marker === 'O') {
    // PlayerHub.addPlayer(name,'X');
    this.addPlayerToPlayerHub(name,'X')
}

// // render elements displayed on window depending on state 
// // determine if player 2 has been created 
// if (PlayerHub.getPlayer(1)) {

//     form.reset();
//     closeDialog();
    
// } else {
//     form.reset();
// openDialog();
// // remove marker label and input for player 2
// const formNode = document.getElementById('my-form')
// const wrapper2 = document.getElementById('wrapper-2')
// formNode.removeChild(wrapper2)

// }


this.changeDialogHeader();
this.renderModalDisplay();
},
renderModalDisplay: function() {
const form = document.getElementById('my-form')

// render elements displayed on window depending on state 
// determine if player 2 has been created 
if (PlayerHub.getPlayer(1)) {

    form.reset();
    closeDialog();
    
} else {
    form.reset();
openDialog();
// remove marker label and input for player 2
const formNode = document.getElementById('my-form')
const wrapper2 = document.getElementById('wrapper-2')
formNode.removeChild(wrapper2)

}


},
// change modal header depending on player
changeDialogHeader: function() {
let dialogHeader = document.getElementById('dialog-header')
if (PlayerHub.getPlayer(0)) {
dialogHeader.textContent = 'Player 2'
}
},


// function to prompt user to make a move 
 promptPlayer1ToMakeMove: function() {
    // const input = prompt(`${PlayerHub.getPlayer(0).name} pick a square', '`);
    alert('Player 1 make a move')

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


// function to open start game dialog on page load
const startGameDialog = document.getElementById('start-game-dialog')
function closeStartGameDialog() {
// close method is not working
// alternative try remove the dialog from dom
document.body.removeChild(startGameDialog)

    }
function openStartGameDialog() {
startGameDialog.showModal();


}

openStartGameDialog();





// create 2 players 
Gameflow.addPlayerToPlayerHub('Sia', 'X')
Gameflow.addPlayerToPlayerHub('Faff', 'O')

// make player 1 make first move
gameboard.renderDOM()
gameboard.updateNav();
gameboard.updateScoreboard();


