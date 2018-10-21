// Accepts an array of elementIDs and a CssClass
function ToggleCssClass(elementIDs,CssClass) {
    for (i = 0; i < elementIDs.length; i++) {
        document.getElementById(elementIDs[i]).classList.toggle(CssClass);
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropdown-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function ResizeGameAreaHeight() {
    let newHeight = GetElementDimensions('site-main').height;
    document.getElementById('game-area').style.height = newHeight + "px";
}

function GetElementDimensions(ElementId) {
    let width = document.getElementById(ElementId).clientWidth;
    let height = document.getElementById(ElementId).clientHeight;
    return {
        "width": width,
        "height": height,
    };
}