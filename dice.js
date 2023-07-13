/* This program will play a simple guessing game.
 * The user will guess, and the computer should print if
 * the guess was too high, too low, or correct.
 */
 
 
var MAX = 100;
var MIN = 1;


function start() {
    var num = Randomizer.nextInt(1, 100);

    while(true){
        var x = readLine("Guess? ");
        if(x == num){
            println("Correct");
            break;
        }else if(x> num){
            println("High");
        }else{
            println("Low");
        }
    }
}