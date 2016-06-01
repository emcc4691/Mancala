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

imageDir = "images/";
emptyHoleImage = imageDir + 'hole-1-0.png';