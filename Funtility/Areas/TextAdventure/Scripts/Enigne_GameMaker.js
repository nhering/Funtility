// TODO Modify NextAreaId() to work for any array of objects at the root
// level within the TextAdventureGame object that has an Id property
let NextIdType = {
    Border: 1,
    Cell: 2,
    Item: 3,
    Player: 4
}

function NextId(NextIdType) {
    DoLogging(LogType.Function, "NextId(NextIdType)", [NextIdType]);

    let array = [];
    switch (NextIdType) {
        case NextIdType.Border:
            array = Game.Borders;
            break;
        case NextIdType.Cell:
            array = Game.Cells;
            break;
        case NextIdType.Item:
            array = Game.Items;
            break;
        case NextIdType.Player:
            array = Game.Players;
    }
    // Add the first area
    if (array.length < 1) return 1;

    // Sort the array of areas by id
    function CompareNumbers(a, b) {
        return a.id - b.id;
    }
    array.sort(CompareNumbers);

    // Find the smallest available id
    let nextId = null;
    let i = 0;
    while (nextId == null) {
        if (array[i].Id == i + 1) {
            continue;
        } else {
            nextId = i + 1;
        }
    }
    return nextId;
}