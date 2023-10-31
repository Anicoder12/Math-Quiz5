function adduser()
{
    pun1 = document.getElementById("Player1_name").value;
    pun2 = document.getElementById("Player2_name").value;

    localStorage.setItem("Player1_name", pun1);
    localStorage.setItem("Player2_name", pun2);

    window.location = "quiz.html";
}