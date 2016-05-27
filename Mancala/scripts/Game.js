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
    this.holes.push(new Hole("holeO1", "storeO", "holeP6", isStore = false, isPlayer = false));
    this.holes.push(new Hole("holeO2", "holeO1", "holeP5", isStore = false, isPlayer = false));
    this.holes.push(new Hole("holeO3", "holeO2", "holeP4", isStore = false, isPlayer = false));
    this.holes.push(new Hole("holeO4", "holeO3", "holeP3", isStore = false, isPlayer = false));
    this.holes.push(new Hole("holeO5", "holeO4", "holeP2", isStore = false, isPlayer = false));
    this.holes.push(new Hole("holeO6", "holeO5", "holeP1", isStore = false, isPlayer = false));

    this.holes.push(new Hole("storeP", "holeO6", null, isStore = true, isPlayer = true));

    this.holes.push(new Hole("holeP1", "storeP", "holeO6", isStore = false, isPlayer = true));
    this.holes.push(new Hole("holeP2", "holeP1", "holeO5", isStore = false, isPlayer = true));
    this.holes.push(new Hole("holeP3", "holeP2", "holeO4", isStore = false, isPlayer = true));
    this.holes.push(new Hole("holeP4", "holeP3", "holeO3", isStore = false, isPlayer = true));
    this.holes.push(new Hole("holeP5", "holeP4", "holeO2", isStore = false, isPlayer = true));
    this.holes.push(new Hole("holeP6", "holeP5", "holeO1", isStore = false, isPlayer = true));

    this.holes.push(new Hole("storeO", "holeP6", null, isStore = true, isPlayer = false));
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