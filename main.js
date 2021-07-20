function changeColor(red, green, blue) {
    red = document.getElementById("red").value
    green = document.getElementById("green").value
    blue = document.getElementById("blue").value
    console.log(red, green, blue)
    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")"
}

