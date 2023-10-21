// create player factory functions
function createPlayer(name, marker) {
    let _marker = marker;

    return {
        name: name,
        marker: marker,
        getMarker: () => {
            return _marker;
        },
        setMarker: function(marker) {
            marker = marker;
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
promptUser();
