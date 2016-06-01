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

Hole.prototype.pickUpContents = function () {
    if (this.numberOfMarbles == 0) return;
    $('.marble-set').remove();
    game.updateHoleImages();
    this.drawEmptyCell();

    var marbleSet = new MarbleSet(this.numberOfMarbles);
    marbleSet.draw(this.ID);
}

Hole.prototype.putDownContents = function () {
    $('.marble-set').remove();
    game.updateHoleImages();
}

Hole.prototype.drawEmptyCell = function () {
    $('#' + this.ID).attr('src', emptyHoleImage);
}



