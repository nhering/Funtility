function createTestJson() {
    let gameData = {
        Areas: [],
        Players: [],
        Ways: []
    }
    gameData.Areas.push({
        "id": 1,
        "title": "Area 1",
        "description": "First area.",
        "Ways": [1]
    });
    gameData.Players.push({
        "id": 1,
        "areaId": 1
    });


    let Transaction =
        {
            Transaction:
                {
                    entityID: entityID,
                    date: date
                },
            LineItems: []
        };
    for (let i = 0; i < rows; i++) {
        let line = {};
        let row = document.getElementById('row_' + i);
        if (row !== null) {
            let category = document.getElementById('Category_' + i).value;
            let subCategory = document.getElementById('SubCategory_' + i).value;
            let amount = parseFloat(document.getElementById('Amount_' + i).value).toFixed(2);
            if (forSave) {
                amount *= expenseOrIncomeMultiplier;
            }
            let taxed = document.getElementById('Tax_' + i).checked;
            let tax = 0;
            if (taxed) {
                tax = parseFloat(amount / taxedAmount * totalTax).toFixed(2);
            }
            let description = document.getElementById('Description_' + i).value;
            let miles = document.getElementById('Miles_' + i).value;
            let gallons = document.getElementById('Gallons_' + i).value;
            Transaction.LineItems.push({
                "RowNumber": i,
                "CategoryID": category,
                "SubCategoryID": subCategory,
                "Amount": amount,
                "Tax": tax,
                "Description": description,
                "Miles": miles,
                "Gallons": gallons
            });
        }
    }
    if (addRow) {
        let newRowNum = Transaction.LineItems.length + 1;
        Transaction.LineItems.push({
            "Category": -1,
            "SubCategory": -1,
            "Amount": 0,
            "Tax": false,
            "Description": '',
            "Miles": 0,
            "Gallons": 0
        });
    }
    return Transaction;
}