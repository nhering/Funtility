function Cell() {
    this.Id; // INT

    this.X; // INT
    this.Y; // INT

    this.NorthBorder; // INT: Border.Id
    this.EastBorder; // INT: Border.Id
    this.SouthBorder; // INT: Border.Id
    this.WestBorder; // INT: Border.Id

    this.Name; // STRING
    this.ShortDescription; // STRING
    this.LongDescription; // STRING

    this.Inventory; // ARRAY: Item.Id
}

function CreateNewCell(ExistingCell, Direction) {
    DoLogging(LogType.Function, "CreateNewCell(CurrentCell, Direction)", [ExistingCell, Direction]);
    
    let NewCell = new Cell();
    NewCell.Id = NextId(NextIdType.Cell);
    
    if (ExistingCell) { // If CurrentCell is not null or empty then there is already at least one cell in the game
        NewCell = GetNewCellCoordinates(NewCell, ExistingCell, Direction);
    } else { // If CurrentCell is empty, then this is the first cell
        NewCell.X = 0;
        NewCell.Y = 0;
    }

    NewCell = GetNewCellBorders(NewCell);

    Game.Cells.push(NewCell);
}

function GetNewCellCoordinates(NewCell, ExistingCell, Direction) {
    DoLogging(LogType.Function, "GetNewCellCoordinates(NewCell, ExistingCell, Direction)"[NewCell, ExistingCell, Direction]);

    switch (Direction) {
        case Direction.North:
            NewCell.X = ExistingCell.X;
            NewCell.Y = ExistingCell.Y + 1;
            break;
        case Direction.East:
            NewCell.X = ExistingCell.X + 1;
            NewCell.Y = ExistingCell.Y;
            break;
        case Direction.South:
            NewCell.X = ExistingCell.X;
            NewCell.Y = ExistingCell.Y - 1;
            break;
        case Direction.West:
            NewCell.X = ExistingCell.X - 1;
            NewCell.Y = ExistingCell.Y;
            break;
    }
    return NewCell;
}

function GetNewCellBorders(NewCell) { //TODO: Complete this
    DoLogging(LogType.Function, "GetNewCellBorders(NewCell)", [NewCell]);

    g = new TextAdventureGame();
    g.Cells.forEach();

    return NewCell;
}

function GetExistingCellBorder(NewCell) { //TODO: Complete this

    let CellToTheNorthsCoords = { X: NewCell.X, Y: NewCell.Y + 1 };
    let CellToTheEastsCoords = { X: NewCell.X + 1, Y: NewCell.Y };
    let CellToTheSouthsCoords = { X: NewCell.X, Y: NewCell.Y - 1 };
    let CellToTheWestsCoords = { X: NewCell.X - 1, Y: NewCell.Y };
}