function ToggleGameSettings() {

    let settingsPanel = document.getElementById("settingsPanel");
    let display = settingsPanel.style.display;

    if (display == "none") {
        settingsPanel.style.display = "block";
    } else {
        settingsPanel.style.display = "none";
    }
}