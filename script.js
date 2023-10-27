// // gameboard object 
// const gameboard = {
//     // squares are labelled a, b, c for columns and 1,2,3 for rows
//     ranksAndFilesAndMarker: [],
//     addMove: function(position,marker) {
// const move = addMove(position,marker)
// this.ranksAndFilesAndMarker.push(move)
//     },
//     getSingleMove: function(index) {
// return this.ranksAndFilesAndMarker[index];
//     },getAllMoves: function() {
//         return this.ranksAndFilesAndMarker;
//     }
//     }
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

// promptPlayer1ToMakeMove()
// promptPlayer2ToMakeMove()
Gameflow.promptPlayer1ToMakeMove();
Gameflow.promptPlayer2ToMakeMove()
Gameflow.promptPlayer1ToMakeMove();
Gameflow.promptPlayer2ToMakeMove()