MarbleSet = function (hole, numberOfMarbles) {
    this.hole = hole;
    this.numberOfMarbles = numberOfMarbles;
    this.imageFile = IMAGE_DIR + MARBLE_SET_IMAGE_PREFIX + Math.min(this.numberOfMarbles, MARBLE_SET_MAX) + '.png';
}

MarbleSet.prototype.draw = function () {
    $('.' + MARBLE_SET_CLASS).remove();
    $('.' + MARBLE_SET_CONTAINER_CLASS).remove();
    $('#' + this.hole.ID).parent().append('<span class="' + MARBLE_SET_CONTAINER_CLASS + '"><img class="' + MARBLE_SET_CLASS + '" src="' + this.imageFile + '" style="left:0' + 'px; top:0' + '"></span>');
}

MarbleSet.prototype.moveToNextHole = function () {
    this.moveToHole(this.hole.nextHoleID);
}

MarbleSet.prototype.moveToCurrentPlayerStore = function () {
    var currentPlayerStore = game.findActivePlayerStore().ID;
    this.moveToHole(currentPlayerStore);
}

MarbleSet.prototype.move = function (horizontalDistance, verticalDistance) {
    $('.' + MARBLE_SET_CLASS).animate({ 'left': this.left + horizontalDistance, 'top': this.top + verticalDistance }, 'slow');
}

MarbleSet.prototype.moveToHole = function (toHoleID) {
    var horizontalDistance = $('#' + toHoleID).offset().left - $('#' + this.hole.ID).offset().left;
    var verticalDistance = $('#' + toHoleID).offset().top - $('#' + this.hole.ID).offset().top;
    this.move(horizontalDistance, verticalDistance);
}

MarbleSet.prototype.dropAllMarbles = function () {
    this.numberOfMarbles = 0;
    $('.' + MARBLE_SET_CLASS).remove();
}

MarbleSet.prototype.dropOneMarble = function () {
    this.numberOfMarbles--;
    $('.' + MARBLE_SET_CLASS).remove();
    this.hole.updateButtonImage();
}

MarbleSet.prototype.pinToNextHole = function () {
    var nextHole = game.findHoleByID(this.hole.nextHoleID);
    this.hole = nextHole;
}

