var readlineSync = require("readline-sync");

var score = 0;

console.log("Hello");
var userName = readlineSync.question('May I Have Your Name? ');
console.log("You entered " + userName);
var welComeMessage = "welcome " + userName + " in the quiz of Taarak Mehta Ka OOLTAH CHASHMAH   ";
console.log(welComeMessage);
console.log("------------------------------------")
console.log("type 1,2,3,4 for you answer")
var questionOne = "What is Jethalal's father, Bapu ji's, real name?                                                            1.Champak Sharma Gada      2.Natwarlal Prabhashankar Udhaiwala          3.Champaklal Jayantilal Gada       4.Jayantilal Giridharlal Gada?    "
var answerOne = "3";

var questionTwo = " Most evenings, the group gets together at a shop to discuss everything under the sun. What is the name of the shop?                                                         1.Abdul Miyan's Store       2.Aao-Khao store        3.All-In-One General Store   4.General Store    "
var answerTwo = "3";
var questionThree = "What is the name of the company where Popatlal works as a reporter?                               1.Express Mail       2.Toofan       3.Aandhi Express   4.Toofan Express    ";
var answerThree = "4";
var questionFour = " Which of the following is Jethalal's favourite breakfast for Sundays?                                  1.Jalebi Fafda    2.Undhiyo        3.Dhokla       4.Khandvi     ";
var answerFour = "1";
var questionFive = "What is the name of the bhojnalaya where Bagha and Natu Kaka have food?                                    1.Gujarati Bhojnalya      2.Padmini Bhojnalaya       3.Savarna Bhojnalaya     4.Padmavati Bhojnalaya     ";
var answerFive = "4";
var questionSix = " Fill in the blanks - Humara Naam Hai Chaalu Pandey, Jhooth Bologe Toh _________?                      1.Padenge Daadey    2.Padenge Laafey            3.Padenge Chaatey        4.Padenge Ghuusey     ";
var answerSix = "1";
var questionSeven = " On which street is the Gokuldham society located?                                                      1.Fim City    2.Powder Gali     3.Gandhi Street      4.None of the above    ";
var answerSeven = "2";
var questionEight = "Where do these people live?                  1.Gokul     2.Gokul society      3.Vrindavan society        4.Gokuldham society   ";
var answerEight = "4";
var questionNine = "Who is jetalal's fire bregade          1.Taarak mehta          2.Popatlal    3.Iyer bhai    4.Bhide   ";
var answerNine = "1";
var questionTen = "Jetalal has a crush on whom?                  1.Babita    2.Komal      3.Anjali    4.Madhvi    ";
var answerTen = "1";

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  console.log("you entered " + userAnswer);
  if (userAnswer === answer) {
    console.log("you are right");
    score = score + 1;
    console.log("score is: " + score)

  } else {
    console.log("you are wrong");
    score = score - 1;
    console.log("score is: " + score)
    console.log("-------------")
  }
}

play(questionOne, answerOne)
play(questionTwo, answerTwo)
play(questionThree, answerThree)
play(questionFour, answerFour)
play(questionFive, answerFive)
play(questionSix, answerSix)
play(questionSeven, answerSeven)
play(questionEight, answerEight)
play(questionNine, answerNine)
play(questionTen, answerTen)
console.log("YAY! YOU SCORE: " + score)