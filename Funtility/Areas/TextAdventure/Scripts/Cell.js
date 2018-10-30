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

function CreateNewCell(existingCell, direction) {
    DoLogging(LogType.Function, "CreateNewCell(CurrentCell, Direction)", [existingCell, direction]);

    let newCell = new Cell();
    newCell.Id = NextId(NextIdType.Cell);

    if (existingCell) { // If existingCell is not null or empty then there is already at least one cell in the game
        newCell = GetNewCellCoordinates(newCell, existingCell, direction);
        newCell = GetNewCellBorders(newCell);
    } else { // If existingCell is empty, then this is the first cell
        newCell.X = 0;
        newCell.Y = 0;
        this.NorthBorder = NewBorder();
        this.EastBorder = NewBorder();
        this.SouthBorder = NewBorder();
        this.WestBorder = NewBorder();
    }

    Game.Cells.push(newCell);
}

function GetNewCellCoordinates(newCell, existingCell, direction) {
    DoLogging(LogType.Function, "GetNewCellCoordinates(newCell, existingCell, direction)"[newCell, existingCell, direction]);

    switch (direction) {
        case direction.North:
            newCell.X = existingCell.X;
            newCell.Y = existingCell.Y + 1;
            break;
        case direction.East:
            newCell.X = existingCell.X + 1;
            newCell.Y = existingCell.Y;
            break;
        case direction.South:
            newCell.X = existingCell.X;
            newCell.Y = existingCell.Y - 1;
            break;
        case direction.West:
            newCell.X = existingCell.X - 1;
            newCell.Y = existingCell.Y;
            break;
        default:
            newCell.X = 0;
            newCell.Y = 0;
            break;
    }
    return newCell;
}

function GetNewCellBorders(newCell) { //TODO: Complete this
    DoLogging(LogType.Function, "GetNewCellBorders(NewCell)", [newCell]);

    g = new TextAdventureGame();
    g.Cells.forEach(GetExistingCellBorderOrNewBorder(cell));

    let cellToTheNorthsCoords = { X: newCell.X, Y: newCell.Y + 1 };
    let cellToTheEastsCoords = { X: newCell.X + 1, Y: newCell.Y };
    let cellToTheSouthsCoords = { X: newCell.X, Y: newCell.Y - 1 };
    let cellToTheWestsCoords = { X: newCell.X - 1, Y: newCell.Y };

    function GetExistingCellBorderOrNewBorder(cell) {
        // NorthBorder
        if (cell.X === cellToTheNorthsCoords.X &&
            cell.Y === cellToTheNorthsCoords.Y) {
            newCell.NorthBorder = cell.SouthBorder;
        } else {
            newCell.SouthBorder = NewBorder();
        }
        // EastBorder
        if (cell.X === cellToTheEastsCoords.X &&
            cell.Y === cellToTheEastsCoords.Y) {
            newCell.EastBorder = cell.WestBorder;
        } else {
            newCell.EastBorder = NewBorder();
        }
        // SouthBorder
        if (cell.X === cellToTheSouthsCoords.X &&
            cell.Y === cellToTheSouthsCoords.Y) {
            newCell.SouthBorder = cell.NorthBorder;
        } else {
            newCell.SouthBorder = NewBorder();
        }
        // WestBorder
        if (cell.X === cellToTheWestsCoords.X &&
            cell.Y === cellToTheWestsCoords.Y) {
            newCell.WestBorder = cell.EastBorder;
        } else {
            newCell.EastBorder = NewBorder();
        }
    }

    return newCell;
}