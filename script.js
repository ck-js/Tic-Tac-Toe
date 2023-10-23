// gameboard object 
const gameboard = {
    // squares are labelled a, b, c for columns and 1,2,3 for rows
    ranksAndFilesAndMarker: [],
    addMove: function(position,marker) {
const move = addMove(position,marker)
this.ranksAndFilesAndMarker.push(move)
    },
    getSingleMove: function(index) {
return this.ranksAndFilesAndMarker[index];
    },getAllMoves: function() {
        return this.ranksAndFilesAndMarker;
    }
    }
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

//  object to create and store players from factory
const playerHub = {
playersArray: [],
addPlayer: function(name, marker) {
    const player = createPlayer(name, marker);
  this.playersArray.push(player);  
  
},
getPlayer: function(index)  {
    return this.playersArray[index];
},
getAllPlayers: function() {
    return this.playersArray;
},

};



// playerHub.addPlayer('MK', 'O')

// function to get player 1 info

function promptUser() {
    const nameInput = prompt('Name', '');
    const markerInput = prompt('Marker', '');

    addPlayerToPlayerhub(nameInput, markerInput)

}
function addPlayerToPlayerhub(name, marker) {
    playerHub.addPlayer(name, marker)

}

// prompt user for name and marker
playerHub.addPlayer('Mark', 'X')
playerHub.addPlayer('Spencer', 'O')

// prompt player to  make a move on the gameboard
function promptPlayer1ToMakeMove() {
const input = prompt(`${playerHub.getPlayer(0).name} pick a square', '`);
const marker = playerHub.getPlayer(0).getMarker();

playerHub.getPlayer(0).setRanksAndFiles(input)
gameboard.addMove(input, marker)
};
function promptPlayer2ToMakeMove() {
    const input = prompt(`${playerHub.getPlayer(1).name} pick a square', '`);
    const marker = playerHub.getPlayer(1).getMarker();

    playerHub.getPlayer(1).setRanksAndFiles(input)
    gameboard.addMove(input, marker)
    
    
    }
promptPlayer1ToMakeMove()
promptPlayer2ToMakeMove()