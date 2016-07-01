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

IMAGE_DIR = 'images/';
HOLE_IMAGE_PREFIX = 'hole-1-';
STORE_IMAGE_PREFIX = 'store-1-';
MARBLE_SET_IMAGE_PREFIX = 'marble-set-';
ACTIVE_PLAYER_IMAGE_PREFIX = 'active-player-';
ACTIVE_PLAYER_INDICATOR_ID = 'active-player-indicator';
EMPTY_HOLE_IMAGE = IMAGE_DIR + HOLE_IMAGE_PREFIX + '0.png';
HOLE_MARBLE_MAX = 14;
MARBLE_SET_MAX = 14;
STORE_MARBLE_MAX = 30;
MARBLE_SET_CLASS = 'marble-set';
DISPLAY_NUMBER_SET_CLASS = 'display-number';
HOLE_CLASS = 'hole';
STORE_CLASS = 'store';
HOLE_CONTAINER_CLASS = 'hole-container';
STORE_CONTAINER_CLASS = 'store-container';
MARBLE_SET_CONTAINER_CLASS = 'marble-set-container';