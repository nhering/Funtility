let Game = null; // New TextAdventureGame();

let Direction = {
    North: 1,
    East: 2,
    South: 3,
    West: 4,
}

function InitTextAdventureGame(gameData) {
    DoLogging("InitTextAdventureGame(gameData)", [gameData]);

    if (game != null) { return } // There should only be one game object and we don't want to overwrite it
    Game = JSON.parse(gameData);
}

function TextAdventureGame() {
    DoLogging(LogType.Function, "TextAdventureGame()", []);

    // These are all arrays
    this.Cells;
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