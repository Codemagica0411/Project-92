function adduser() {
    player1user = document.getElementById("player1name").value;
    player2user = document.getElementById("player2name").value;
    localStorage.setItem("player1name",player1user);
    localStorage.setItem("player2name", player2user);
    window.location = "game_page.html";
 }