setupHoles = [{ ID: "holeO1", nextHoleID: "storeO", oppositeHoleID: "holeP6", isStore: false, isPlayer: false },
{ ID: "holeO2", nextHoleID: "holeO1", oppositeHoleID: "holeP5", isStore: false, isPlayer: false },
{ ID: "holeO3", nextHoleID: "holeO2", oppositeHoleID: "holeP4", isStore: false, isPlayer: false },
{ ID: "holeO4", nextHoleID: "holeO3", oppositeHoleID: "holeP3", isStore: false, isPlayer: false },
{ ID: "holeO5", nextHoleID: "holeO4", oppositeHoleID: "holeP2", isStore: false, isPlayer: false },
{ ID: "holeO6", nextHoleID: "holeO5", oppositeHoleID: "holeP1", isStore: false, isPlayer: false },
{ ID: "storeP", nextHoleID: "holeO6", oppositeHoleID: null, isStore: true, isPlayer: true },
{ ID: "holeP1", nextHoleID: "storeP", oppositeHoleID: "holeO6", isStore: false, isPlayer: true },
{ ID: "holeP2", nextHoleID: "holeP1", oppositeHoleID: "holeO5", isStore: false, isPlayer: true },
{ ID: "holeP3", nextHoleID: "holeP2", oppositeHoleID: "holeO4", isStore: false, isPlayer: true },
{ ID: "holeP4", nextHoleID: "holeP3", oppositeHoleID: "holeO3", isStore: false, isPlayer: true },
{ ID: "holeP5", nextHoleID: "holeP4", oppositeHoleID: "holeO2", isStore: false, isPlayer: true },
{ ID: "holeP6", nextHoleID: "holeP5", oppositeHoleID: "holeO1", isStore: false, isPlayer: true },
{ ID: "storeO", nextHoleID: "holeP6", oppositeHoleID: null, isStore: true, isPlayer: false }];


Hole = function (ID, nextHoleID, oppositeHoleID, isStore, isPlayer) {
    this.ID = ID;
    this.numberOfMarbles = isStore ? 0 : 4;
    this.nextHoleID = nextHoleID;
    this.oppositeHoleID = oppositeHoleID;
    this.isStore = isStore;
    this.isPlayer = isPlayer;
}

Hole.prototype.updateButtonImage = function () {
    var imageFilePrefix = this.isStore ? "store-1-" : "hole-1-";
    var numberOfMarbles = this.isStore ? Math.min(this.numberOfMarbles, 11) : Math.min(this.numberOfMarbles, 14);

    var imageFile = imageDir + imageFilePrefix + numberOfMarbles + ".png";
    document.getElementById(this.ID).src = imageFile;
}

Hole.prototype.reduceMarbles = function (reduction) {
    this.numberOfMarbles = this.numberOfMarbles - reduction;
}

Hole.prototype.increaseMarbles = function (increase) {
    this.numberOfMarbles = this.numberOfMarbles + increase;
}

Hole.prototype.moveContents = function () {
    var nextHole = game.findHoleByID(this.nextHoleID);
    var lastPlayedHole = this;

    while (this.numberOfMarbles > 0) {
        if (!nextHole.isStore || nextHole.isPlayer == game.isPlayerTurn)
            this.moveContentsTo(nextHole, 1);

        lastPlayedHole = nextHole;
        nextHole = game.findHoleByID(nextHole.nextHoleID);
    }

    if (lastPlayedHole.isStore)
        game.togglePlayerTurn();
    else if (lastPlayedHole.isPlayer == game.isPlayerTurn && lastPlayedHole.numberOfMarbles == 1) {
        var oppositeHole = game.findHoleByID(lastPlayedHole.oppositeHoleID);
        if (oppositeHole.numberOfMarbles > 0) {
            lastPlayedHole.moveContentsToStore();
            game.findHoleByID(lastPlayedHole.oppositeHoleID).moveContentsToStore();
        }
    }
}

Hole.prototype.moveContentsTo = function (to, numberOfMarbles) {
    if (!to) return;
    this.reduceMarbles(numberOfMarbles);
    to.increaseMarbles(numberOfMarbles);
}

Hole.prototype.moveContentsToStore = function () {
    var store = game.findActivePlayerStore();
    this.moveContentsTo(store, this.numberOfMarbles);
}

