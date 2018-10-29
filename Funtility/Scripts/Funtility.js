// elementIDs: (string) or (array of strings) The name of one or multiple elements by ID.
// cssClass: (string) The name of the class to add to the elements class list.
function ToggleCssClass(elementIDs, cssClass) {
    DoLogging("ToggleCssClass()");

    if (typeof elementIDs === 'string') {
        document.getElementById(elementIDs).classList.toggle(cssClass);
    } else {
        for (i = 0; i < elementIDs.length; i++) {
            document.getElementById(elementIDs[i]).classList.toggle(cssClass);
        }
    }
}

window.onmousedown = function (event) {
    DoLogging("window.onclick()");

    if (!event.target.matches('.dropdown-button')) {
        CloseDropdowns();
    }
}

function CloseDropdowns() {
    DoLogging("CloseDropdowns()");

    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
        }
    }
}

function ResizeGameAreaHeight() {
    DoLogging("ResizeGameAreaHeight()");

    let newHeight = window.innerHeight
    let siteHeader = GetElementDimensions('site-header').height;
    let gameHeader = GetElementDimensions('game-header').height;
    let siteFooter = GetElementDimensions('site-footer').height;
    newHeight -= (siteHeader + gameHeader + siteFooter);
    document.getElementById('game-area').style.height = newHeight + "px";
}

function GetElementDimensions(ElementId) {
    DoLogging("GetElementDimensions()");

    let width = document.getElementById(ElementId).clientWidth;
    let height = document.getElementById(ElementId).clientHeight;
    return {
        "width": width,
        "height": height,
    };
}

function Login() {
    Modal_Open();
}

//#region Modal

function Modal_Open() {
    let modal = document.getElementById("modal");
    modal.removeAttribute("style");
    modal.setAttribute("class", "modal-fade");
}

function Modal_Close() {
    let modal = document.getElementById("modal");
    modal.removeAttribute("class")
    modal.setAttribute("style", "display:none;");
}

//function Modal() {
//    this.Theme = new ModalTheme;
//    this.Title = "";
//    this.BodyClass = "";
//}

//let ModalTheme = {
//    Info: 1,
//    Menu: 2,
//    Warn: 3,
//}

//function ThemeModal(theme) {
//    switch (ModalTheme) {
//        case ModalTheme.Info:
//            alert(theme);
//            break;
//        case ModalTheme.Menu:
//            alert(theme);
//            break;
//        case ModalTheme.Warn:
//            alert(theme);
//            break;
//        default:
//            break;
//    }
//}

//#endregion