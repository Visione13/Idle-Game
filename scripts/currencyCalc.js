var currentBitcoin = 0;

gametick = setInterval(function() {setCurrency(); }, 1000);

function setCurrency() {
    document.getElementById("currentBitcoin").innerHTML = currentBitcoin + 1;
    currentBitcoin = currentBitcoin + 1;
}