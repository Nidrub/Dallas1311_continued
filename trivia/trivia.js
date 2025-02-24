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
function trivia(){
    var points =0;
    for (var i = 0; i < 3; i++){
        var guesses =3;
        while ( guesses > 0){
            var user_answer = prompt(questions[i]).trim().toLowerCase();
            var  current_answer = answers[i].trim().toLowerCase();
            var numRegex = /[0-9]/;
            //check if the answer is correctly and has no numbers in it
            if( current_answer == user_answer && !current_answer.match(numRegex)){
                points = points + guesses;
                break;
            }
            else{
                guesses --;
            }
        }
    }
    points = points /9;
    points = points *100;
    points = points.toFixed(2);

    return (points + "%");

}
const date = new Date();
function current_date(){

    let month = date.getMonth()+1 ;
    let day = date.getDate();
    let year = date.getFullYear();
    return `${month}/${day}/${year}`;
}
function current_time(){
    let hour = date.getHours();
    let minute = date.getMinutes();
    console.log( hour + " : " + minute)
    //if methond for the times
    if(hour >=6 && hour < 12){
        return("Good Morning")
    }
    else if(hour >= 12 && hour <= 18){
        return("Good Afternoon")
    }
    else{
        return("Good Evening")
    }
}
function time_response(){
    let hour = date.getHours();
    let minute = date.getMinutes();
    let time = hour + " : " + minute;
    //if methond for the times
    if(hour >=6 && hour < 12){
        return(time + " - Good Morning")
    }
    else if(hour >= 12 && hour <= 18){
        return(time + " - Good Afternoon")
    }
    else{
        return(time + " - Good Evening")
    }
}
function ask_name() {
    var username = prompt("What is your first name?");
    while (username == null || /\s/.test(username)) {
        username = prompt("Please enter your first name");
    }
    var nameRegexp = /[A-Z]/;
    if (nameRegexp.test(username.charAt(0))) {
        return (current_time() + "  " + username + "!")
    }
    else{
        var usernameMod = username.charAt(0).toUpperCase() + username.substring(1);
        return (current_time() + "  " + usernameMod + "!")
    }
}
function ask_email(){
    var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    var email = prompt("Please enter your email address");
    while (email == null || !email.match(emailRegex)){
        email = prompt("Please enter your email address again");
    }
    //split using the @ part
    var index = email.lastIndexOf("@");
    var username_email = email.substr(0, index-1);
    var domain = email.substr(index+1, email.length);
    //convert to upper case
    username_email = username_email.charAt(0).toUpperCase() + username_email.substring(1);
    return ("Username: " + username_email +"\n Domain: " + domain)
}
//quotes of the day
function quoteOftheDay(){
    var quotes = [
        "If you love life, don't waste time",
        "Life is about creating yourself",
        "Not all those who wander are lost",
        "Speak softly and carry a big stick",
        "Nothing in the world is more dangerous"
    ];
    let random = Math.floor(Math.random() * quotes.length);// from0 to 4
    return quotes[random];
}


window.onload = function() {
    var userResult = ask_name();
    document.getElementById("message").innerHTML = userResult;

    document.getElementById("date").innerHTML = current_date();
    var userEmail = ask_email();
    document.getElementById("userEmail").innerHTML = userEmail;
    var quoatGenerated = quoteOftheDay();
    document.getElementById("quote").innerHTML = quoteOftheDay();

    var results = trivia();
    document.getElementById("points").innerText = results;
}