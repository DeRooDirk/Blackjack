var cards = [];
var suits = ["spades", "hearts", "clubs", "diams"];
var numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var output = document.getElementById("output");
for (let s in suits) {
    for (let n in numb) {
        output.innerHTML += suits[s] + numb[n];
    }
}

var randomNum = Math.floor((Math.random() * 52) + 1);