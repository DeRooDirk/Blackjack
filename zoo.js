var cards = [];
var suits = ["spades", "hearts", "clubs", "diams"];
var numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var output = document.getElementById("output");
for (let s in suits) {
    var suit = suits[s][0].toUpperCase();
    var bgcolor = (suit == "S" || suit == "C") ? "black" : "red";
    for (let n in numb) {
        //    output.innerHTML += "<span style='color:" + bgcolor + "'>&" + suits[s] + ";" + numb[n] + "</span> ";
        let cardValue = (n > 9) ? 10 : Number(n) + 1;
        let card = {
            suit: suit,
            icon: suits[s],
            bgcolor: bgcolor,
            cardnum: numb[n],
            cardvalue: cardValue
        };
        cards.push(card);
    }
}
console.log(cards);
let randomNum = Math.floor((Math.random() * 52));
output.innerHTML += "<span style='color:" + cards[randomNum].bgcolor + "'> &" + cards[randomNum].icon + ";" + cards[randomNum].cardnum + "</span> ";