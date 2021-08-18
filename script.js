var Btn = document.getElementById("share-btn");
var Share = document.getElementById("share");
var Arrow = document.getElementById("arr")
Share.style.display = "none";
Btn.onclick = function show_hide() {
    if (Share.style.display == "none") {
        Btn.style.background = "hsl(214, 17%, 51%)";
        Arrow.style.fill = "#fff"
        Share.style.display = "flex";
    } else {
        Share.style.display = "none";
        Arrow.style.fill = "#6E8098"
        Btn.style.background = "hsl(210, 46%, 95%)";
    }
}