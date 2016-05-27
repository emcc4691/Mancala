imageDir = "images/";

function Initialise() {
    game = new Game();
    game.initialise();
    AddHoleClickEvents();
    AddHoleHoverEvents();
}

function AddHoleClickEvents() {
    $('.hole-container').click(
        function () {
            game.play($(this).find('.hole').attr('id'));
        });
}


function AddHoleHoverEvents() {
    $('.hole-container').hover(
        function () {
            $(this).append('<div class="display-number">' + game.findHoleByID($(this).find('.hole').attr('id')).numberOfMarbles + '</div>');
        },
        function () {
            $('.display-number').remove();
        }
    );
}

document.addEventListener('DOMContentLoaded', Initialise);
