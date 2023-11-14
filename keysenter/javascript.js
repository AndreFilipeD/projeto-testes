var text = window.document.querySelector("#text")

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "z") {
        text.innerHTML += "CLICOU"
    }
});

document.addEventListener("keypress", function onPress(event) {
    if (event.key) {
        text.innerHTML += event.key
    }
});
