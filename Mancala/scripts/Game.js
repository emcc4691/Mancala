Game = function () {
    this.holes = [];
    this.isPlayerTurn = true;
}

Game.prototype.initialise = function () {
    game.addHoles();
    game.updateHoleImages();
    game.updateActivePlayerImage()
}

Game.prototype.play = function (holeID) {
    var hole = this.findHoleByID(holeID)
    if (hole.isPlayer == this.isPlayerTurn && hole.numberOfMarbles > 0) {
        this.playHole(holeID);
        this.isPlayerTurn = !this.isPlayerTurn;
        this.updateActivePlayerImage();
    }
}

Game.prototype.playHole = function (holeID) {
    this.moveContents(holeID);
    this.updateHoleImages();
}

Game.prototype.updateActivePlayerImage = function () {
    var imageFile = imageDir + 'active-player-' + (this.isPlayerTurn ? 'player' : 'oponent') + '.png';
    document.getElementById('active-player-indicator').src = imageFile;
}

Game.prototype.updateHoleImages = function () {
    this.holes.forEach(function (entry) {
        entry.updateButtonImage()
    });
}

Game.prototype.addHoles = function () {
    for (var i = 0; i < setupHoles.length; i++) {
        var hole = setupHoles[i];
        var newHole = new Hole(hole.ID, hole.nextHoleID, hole.oppositeHoleID, hole.isStore, hole.isPlayer);
        this.holes.push(newHole);
    }
}

Game.prototype.findHoleByID = function (ID) {
    return this.holes.filter(hole => hole.ID == ID)[0];
}

Game.prototype.moveContents = function (holeID) {
    var firstHole = this.findHoleByID(holeID);

    var nextHole = this.findHoleByID(firstHole.nextHoleID);
    var lastPlayedHole = firstHole
    while (firstHole.numberOfMarbles > 0) {
        if (!nextHole.isStore || nextHole.isPlayer == this.isPlayerTurn)
            this.moveContentsFromTo(nextHole, firstHole, 1);

        lastPlayedHole = nextHole;
        nextHole = this.findHoleByID(nextHole.nextHoleID);
    }

    if (lastPlayedHole.isStore)
        this.isPlayerTurn = !this.isPlayerTurn;
}

Game.prototype.moveContentsFromTo = function (from, to, numberOfMarbles) {
    from.increaseMarbles(numberOfMarbles);
    to.reduceMarbles(numberOfMarbles);
}