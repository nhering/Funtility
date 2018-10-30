// All of the properties in the border are cascading
// If RenderBorder is true then use the bordertexture property to decide how it looks
function Border() {
    this.Id = NextId(NextIdType.Border); // INT

    this.RenderBorder; // BOOLEAN
    this.BorderTexture; // ENUM: BorderTexture.Brick

    this.RenderDoor; // BOOLEAN
    this.DoorTexture; // ENUM: DoorTexture.Metal

    this.IsLocked; // BOOLEAN
    this.KeyId; // INT
}

let BorderTexture = {
    Metal: 1, // Default
    Wood: 2,
    Brick: 3,
    Drywall: 4,
    Stone: 5,
    // Etc...
}

let DoorTexture = {
    Metal: 1, // Default
    Wood: 2,
    // Etc...
}

// Constructor
function NewBorder() {
    DoLogging(LogType.Function, "NewBorder()", []);

    let newBorder = new Border();
    newBorder.Id = NextId(NextIdType.Border);
    newBorder.RenderBorder = true;
    newBorder.BorderTexture = BorderTexture.Metal;
    newBorder.RenderDoor = false;

    Game.Borders.push(newBorder);

    return newBorder.Id;
}