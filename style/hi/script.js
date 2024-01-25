var frame = 1;
var total = 836;

function play() {
    intervalReader = setInterval(raed, 41);
}

function raed(values) {
    frame = (frame % total) + 1;
    document.getElementById("player").innerHTML = arr[frame];
}