function Cell() {
    this.Id; // INT

    this.X; // INT
    this.Y; // INT

    this.North; // INT: Border.Id
    this.East; // INT: Border.Id
    this.South; // INT: Border.Id
    this.West; // INT: Border.Id

    this.Name; // STRING
    this.ShortDescription; // STRING
    this.LongDescription; // STRING

    this.Inventory; // ARRAY: Item.Id
}

function NewCell(X, Y, Name) {
    DoLogging(LogType.Function, "NewCell(X, Y, Name)", [X, Y, Name]);

    let cell = new Cell();
    cell.Id = NextId(NextIdType.Cell);

    // Validate input
    if ((X == "" || X == null ||
        Y == "" || Y == null)){
        DoLogging(LogType.InputError, "NewCell()", [X, Y, Name]);
        return;
    }

    if (DirectionOfNewCell == null) {

    }
    cell.X = X;
    cell.Y = Y;

    cell.Name = Name; // STRING: Required
    cell.ShortDescription; // STRING: Optional
    cell.LongDescription; // STRING: Optional

    Game.Cells.push(cell);
}