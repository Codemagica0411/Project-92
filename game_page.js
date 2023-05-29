function Send() {
    number_1 = document.getElementById("number1").value;
    number_2 = document.getElementById("number2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);
    question_number = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class= 'btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer) {
        if(answer_turn == "player1") {
            update_player1_score = player1_score +1;
            document.getElementById("player1score").innerHTML = update_player1_score
        }
    else {
        update_player2_score = player2_score +1;
        document.getElementById("player2score").innerHTML = update_player2_score
    }
    } 
    if(question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("playerQ").innerHTML = "Question Turn - " + player2name;
    }
    else {
        question_turn = "player1";
        document.getElementById("playerQ").innerHTML = "Question Turn - " + player1name;
    }
    if(answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("playerAns").innerHTML = "Answer Turn - " + player2name;
    }
    else {
        answer_turn = "player1";
        document.getElementById("playerAns").innerHTML = "Answer Turn - " + player1name;
    }
};
function adduser() {
    player1user = document.getElementById("player1name").value;
    player2user = document.getElementById("player2name").value;
    localStorage.setItem("player1name",player1user);
    localStorage.setItem("player2name", player2user);
    window.location = "game_page.html";
 }