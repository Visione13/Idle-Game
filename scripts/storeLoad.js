savetick = setInterval(function() {storeValues(); }, 10000);
function firstLoad() {
    if(localStorage.getItem("playername").length == 0){
        var playername = prompt("Please enter your name", "");
        localStorage.setItem("playername", playername);
    }else{
        var playername = localStorage.getItem("playername");
    }
    document.getElementById("playername").innerHTML = playername;
    currentBitcoin = parseInt(localStorage.getItem("currentBitcoin"));
}
  
function storeValues() {
    localStorage.setItem("currentBitcoin", currentBitcoin);
}