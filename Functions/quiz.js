var questions = [
    "What is the fastest land animal?",
    "Where did the Olympic Games originate?",
    "Who invented the telephone?"
];
var answers = [
    "cheetah",
    "Greece",
    "Alexander Graham"
];
function quiz(){
    var points =0;
    for (var i = 0; i < 3; i++){
        var guesses =3;
        while ( guesses > 0){
            var user_answer = prompt(questions[i]).trim().toLowerCase();
            var  current_answer = answers[i].trim().toLowerCase();
            //check if the answer is correctly
            if( current_answer == user_answer){
                points = points + guesses;
                break;
            }
            else{
                guesses --;
            }
        }
    }
    return points;

}
window.onload = function() {
    var results = quiz();
    document.getElementById("points").innerText = results;
}