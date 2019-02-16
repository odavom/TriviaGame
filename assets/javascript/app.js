
/* this is a function that is called when the document is loaded and then allows all the code inside of of it to run. this will not allow any js to be loaded before the page is loaded */
$(document).ready(function() { 

    /* hide the countdown and timer and results after the page loads
    the $ says it's jQuery and selects the id or class and tells it to hide */

    $('#countdown').hide();
    $('.trivia-ques').hide();
    $('.results').hide();

    // declaring variables
    let number = 90; //number of seconds
    let inervalId;
    let correctCount = 0;
    let wrongCount = 0;
    let unanswered = 0;

    // FUNCTIONS

    // this function will show questions and timer and game done btn
    function showQuestions() {
        $('#countdown').show();
        $('.trivia-ques').show();
        $('#game-done').show();
    }

    // this is function countdownTimer and assigns intervalId set interval which decreases by 1 second 
    function countdownTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    // function to decrease the timer
    function decrement() {
        number--;
        $('#timer').html(" " + number + " " + "seconds")
        if (number === 1) {
            $('#timer').html(" " + number + " " + "second");
        } else if (number === 0) {
            stop();
            hide();
            displaySummary();
        }
    }
    
    // clear the timer
    function stop() {
        clearInterval(intervalId);
    }

    // hide text after questions answered or timer reaches 0
    function hide() {
        $('#countdown').hide();
        $('.trivia-ques').hide();
        $('#game-done').hide();
    }

    // display the summary of the game
    function displaySummary() {
        $('.results').show();
        unanswered = (8-(correctCount + wrongCount));
        $('#correctScore').text("Correct Answers:" + " " + correctCount);
        $('#wrongScore').text("Wrong Answers:" + " " + wrongCount);
        $('#unanswered').text("Unanswered:" + " " + unanswered);
    }

    // CLICK EVENTS

    // clicking the start button
    $('#game-start').on('click', function() {
        $('#game-start').hide();
        showQuestions();
        countdownTimer();
    });

    // clicking the done button
    $('#game-done').on('click', function() {
        $('#game-start').hide();
        hide();
        displaySummary();
    });

    // clicking radio buttons
    $('input[type=radio]').on ('change', function() {
        correctCount = $('input[value=correct]:checked').length;
        wrongCount = $('input[value=wrong]:checked').length;
        unanswered = (8-(correctCount + wrongCount));
    });

});