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
    
    return {
    addMove: function(position,marker) {
const move = addMove(position,marker)
ranksAndFilesAndMarker.push(move)
    },
    getSingleMove: function(index) {
return ranksAndFilesAndMarker[index];
    },
    getAllMoves: function() {
        return ranksAndFilesAndMarker;
    },
    }
})();

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
    // function to get player 1 info
    
    addPlayerToPlayerHub: function(name, marker) {
        PlayerHub.addPlayer(name, marker)
    
    },

    promptUser: function() {
    const nameInput = prompt('Name', '');
    const markerInput = prompt('Marker', '');

    this.addPlayerToPlayerHub(nameInput, markerInput)

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
// PlayerHub.addPlayer('Mark', 'X')
// PlayerHub.addPlayer('Spencer', 'O')

// prompt player to  make a move on the gameboard
function promptPlayer1ToMakeMove() {
const input = prompt(`${PlayerHub.getPlayer(0).name} pick a square', '`);
const marker = PlayerHub.getPlayer(0).getMarker();

PlayerHub.getPlayer(0).setRanksAndFiles(input)
gameboard.addMove(input, marker)
};
function promptPlayer2ToMakeMove() {
    const input = prompt(`${PlayerHub.getPlayer(1).name} pick a square', '`);
    const marker = PlayerHub.getPlayer(1).getMarker();

    PlayerHub.getPlayer(1).setRanksAndFiles(input)
    gameboard.addMove(input, marker)
    
    
    }

Gameflow.promptUser()
Gameflow.promptUser()

// promptPlayer1ToMakeMove()
// promptPlayer2ToMakeMove()