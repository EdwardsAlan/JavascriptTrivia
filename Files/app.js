function populate(){
    if(quiz.isEnded()){
        showScores();
    }
    else {
        //show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //show choices
        var choices = quiz.getQuestionIndex().choices;
        for(var i =0; i< choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess ("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess){
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
}

function showProgress (){
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML  = "Question " + currentQuestionNumber + " of " +quiz.questions.length;
}

function showScores() {
    var gameOverHtml = "<h1>Score</h1>";
    gameOverHtml += "<h2 id='score'> Your score: " + quiz.score + " </h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;
}

var questions = [
    new Question("In JavaScript you cannot use what reserved words as variables, labels, or function names?",["Reserved Words", "Strings", "Data Types", "Number"], "Number"),
    new Question("Which of the following is used for declaring variables in a function, but is block scoped?",["Null", "var", "const", "let"], "var"),
    new Question("A variable declared outside a JavaScript function, becomes what?",["Local", "Global", "Invalid", "Number"], "Number"),
    new Question("In JavaScript, a variable must be declared before it is used.",["True", "False"], "Number"),
    new Question("JavaScript function parameters are delimited by:",["comma", "semicolon", "colon", "period"], "Number"),
    new Question("Which of the following comparison checks for equal value and type?",["y = 1", "y == 1", "y === 1", "y <> 1"], "Number"),
    new Question("Data  used to track different characteristics related to a user which stored in small text files on your computer are called:",["JSON", "XML", "Cache", "Cookies"], "Number"),
    new Question("A built-in method used to convert a JavaScript object into a string.",["JSON.stringify()", "JSONify()", "Convert2JSON()", "JSON.Convert.Object()"], "Number"),
    new Question("Which of the following is used to add an HTML element using JavaScript?",["document.createElement(element)", "document.appendChild(element)", "document.write(text)", "document.replaceChild(new, old)"], "Number"),
    new Question("In JavaScript, which of the following is used to comment lines:",["/* and */", "//", "Data Types", "<!-- and  -->"], "*//")

];

var quiz = new Quiz(questions);

populate();
