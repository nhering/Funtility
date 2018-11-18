let Game = null; // New TextAdventureGame();

function TextAdventureGame() {
    DoLogging(LogType.Function, "TextAdventureGame()", []);

    // These are all arrays
    this.Cells = [];
    this.Items;
    this.Players; // In case we decide to have multiplayer games
    this.Borders;

    // Does this belong inside the game object? Or is it a completely different object?
    // Stores the list of commands entered.
    // I'm thinking this is a dicionary:
    // { 1:"Go west", 2:"Pick up key", etc...}
    // That would make it easy to keep it chronological
    this.Recording;
}

function CreateNewTextAdventureGame() {
    DoLogging(LogType.Function, "CreateNewTextAdventureGame()", []);

    Game = new TextAdventureGame();

    let firstCell = CreateNewCell(null, null);
    Game.Cells.push(firstCell);
}

function LoadTextAdventureGame(gameData) {
    DoLogging("LoadTextAdventureGame(gameData)", [gameData]);

    // There should only be one game object and we don't want to overwrite it
    if (Game == null) {
        return
    } else {
        Game = JSON.parse(gameData);
    }
}

let Direction = {
    North: 1,
    East: 2,
    South: 3,
    West: 4,
}