function Initialise() {
    game = new Game();
    game.initialise();
    AddHoleClickEvents();
    AddHoleHoverEvents();
    AddStoreHoverEvents();
}

function AddHoleClickEvents() {
    $('.' + HOLE_CONTAINER_CLASS).click(
        function () {
            game.play($(this).find('.' + HOLE_CLASS).attr('id'));
        });
}


function AddHoleHoverEvents() {
    $('.' + HOLE_CONTAINER_CLASS).hover(
        function () {
            $(this).append('<div class="' + DISPLAY_NUMBER_SET_CLASS + '">' + game.findHoleByID($(this).find('.' + HOLE_CLASS).attr('id')).numberOfMarbles + '</div>');
        },
        function () {
            $('.' + DISPLAY_NUMBER_SET_CLASS).remove();
        }
    );
}

function AddStoreHoverEvents() {
    $('.' + STORE_CONTAINER_CLASS).hover(
        function () {
            $(this).append('<div class="' + DISPLAY_NUMBER_SET_CLASS + '">' + game.findHoleByID($(this).find('.' + STORE_CLASS).attr('id')).numberOfMarbles + '</div>');
        },
        function () {
            $('.' + DISPLAY_NUMBER_SET_CLASS).remove();
        }
    );
}

document.addEventListener('DOMContentLoaded', Initialise);
