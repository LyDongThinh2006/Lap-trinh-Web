let isChanged = false;

function changeText() {
    if (isChanged) {
        document.body.style.backgroundColor = "#f0f4f8";
    } else {
        document.body.style.backgroundColor = "lightblue";
    }

    isChanged = !isChanged;
}