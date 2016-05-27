holeIDs = [{ name: "storeO", isStore: true, isPlayer: false },
            { name: "holeO1", isStore: false, isPlayer: false },
            { name: "holeO2", isStore: false, isPlayer: false },
            { name: "holeO3", isStore: false, isPlayer: false },
            { name: "holeO4", isStore: false, isPlayer: false },
            { name: "holeO5", isStore: false, isPlayer: false },
            { name: "holeO6", isStore: false, isPlayer: false },
            { name: "storeP", isStore: true, isPlayer: true },
            { name: "holeP1", isStore: false, isPlayer: true },
            { name: "holeP2", isStore: false, isPlayer: true },
            { name: "holeP3", isStore: false, isPlayer: true },
            { name: "holeP4", isStore: false, isPlayer: true },
            { name: "holeP5", isStore: false, isPlayer: true },
            { name: "holeP6", isStore: false, isPlayer: true }]

Hole = function (ID, nextHoleID, oppositeHoleID, isStore, isPlayer) {
    this.ID = ID;
    this.numberOfMarbles = isStore ? 0 : 4;
    this.nextHoleID = nextHoleID;
    this.oppositeHoleID = oppositeHoleID;
    this.isStore = isStore;
    this.isPlayer = isPlayer;
}

Hole.prototype.moveContentsToStore = function () {

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