MarbleSet = function (numberOfMarbles) {
    this.numberOfMarbles = numberOfMarbles;
    this.imageFile = imageDir + 'marble-set-' + Math.min(this.numberOfMarbles, 14) + '.png';
    this.left = -10;
    this.top = 0;
}

MarbleSet.prototype.draw = function (holeID) {
    $('#' + holeID).parent().append('<span class="marbles"><img class="marble-set" src="' + this.imageFile + '" style="left:' + this.left + 'px; top:' + this.top + '"></span>');
}

MarbleSet.prototype.moveLeft = function (increment) {
    $(".marble-set").animate({ "left": this.left - increment }, "slow");
}