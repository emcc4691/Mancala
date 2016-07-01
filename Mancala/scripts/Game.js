Game = function () {
    this.holes = [];
    this.isPlayerTurn = true;
}

Game.prototype.initialise = function () {
    game.addHoles();
    game.updateHoleImages();
    game.updateActivePlayerImage()
}

Game.prototype.togglePlayerTurn = function () {
    this.isPlayerTurn = !this.isPlayerTurn;
}

Game.prototype.play = function (holeID) {
    var hole = this.findHoleByID(holeID)
    if (hole.isPlayer == this.isPlayerTurn && hole.numberOfMarbles > 0) {
        this.playHole(holeID);
        this.togglePlayerTurn();
        this.updateActivePlayerImage();
    }
}

Game.prototype.playHole = function (holeID) {
    this.findHoleByID(holeID).moveContents(holeID);

    this.checkActivePlayerFinished();
    this.togglePlayerTurn();
    this.checkActivePlayerFinished();
    this.togglePlayerTurn();

    this.updateHoleImages();
}

Game.prototype.updateActivePlayerImage = function () {
    var imageFile = IMAGE_DIR + ACTIVE_PLAYER_IMAGE_PREFIX + (this.isPlayerTurn ? 'player' : 'oponent') + '.png';
    document.getElementById(ACTIVE_PLAYER_INDICATOR_ID).src = imageFile;
}

Game.prototype.updateHoleImages = function () {
    this.holes.forEach(
        function (entry) {
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

Game.prototype.findActivePlayerStore = function () {
    return this.holes.filter(hole => hole.isStore && hole.isPlayer == this.isPlayerTurn)[0];
}

Game.prototype.findActivePlayerHoles = function () {
    return this.holes.filter(hole => !hole.isStore && hole.isPlayer == this.isPlayerTurn);
}

Game.prototype.calculateTotalMarblesOnActiveSide = function () {
    var result = 0;
    var holes = this.holes.filter(hole => !hole.isStore && hole.isPlayer == this.isPlayerTurn);

    holes.forEach(
        function (entry) {
            result += entry.numberOfMarbles;
        });

    return result;
}

Game.prototype.checkActivePlayerFinished = function () {
    if (this.calculateTotalMarblesOnActiveSide() == 0) {
        this.togglePlayerTurn();
        var holes = this.findActivePlayerHoles();

        holes.forEach(
            function (entry) {
                entry.moveContentsToStore();
            });
        this.togglePlayerTurn();
    };
}