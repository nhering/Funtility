﻿var game = null; // New TextAdventureGame();

function InitTextAdventureGame(gameData) {
    DoLogging("InitTextAdventureGame()");

    if (game != null) { return } // There should only be one game object and we don't want to overwrite it
    game = JSON.parse(gameData);
}

function TextAdventureGame() {
    DoLogging("TextAdventureGame()");
    // These are all arrays
    this.Areas;
    this.Items;
    this.Players; // In case we decide to have multiplayer games
    this.Ways;
}