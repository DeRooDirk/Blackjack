var cards = [];
var playerCard = [];
var dealerCard = [];
var cardCount = 0;
var suits = ["spades", "hearts", "clubs", "diams"];
var numb = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
var output = document.getElementById("output");
var dealerHolder = document.getElementById("dealerHolder");
var playerHolder = document.getElementById("playerHolder");
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


function start() {

    shuffleDeck(cards);

    dealNew();
    outputCard();

}

function dealNew() {
    playerCard = [];
    dealerCard = [];
    dealerHolder.innerHTML = "";
    playerHolder.innerHTML = "";
    for (x = 0; x < 2; x++) {
        dealerCard.push(cards[cardCount]);
        cardCount++;
        playerCard.push(cards[cardCount]);
        cardCount++;
    }
    console.log(dealerCard);
    console.log(playerCard);
}

function shuffleDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function outputCard() {
    output.innerHTML += "<span style='color:" + cards[cardCount].bgcolor + "'> &" + cards[cardCount].icon + ";" + cards[cardCount].cardnum + "</span>     ";
}







/*

 let randomNum = Math.floor((Math.random() * 52));
	output.innerHTML += "<span style='color:" + cards[randomNum].bgcolor + "'> &" + cards[randomNum].icon + ";" + cards[randomNum].cardnum + "</span>     ";
	
	*/