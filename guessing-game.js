function guessingGame() {
    const correctNum = Math.floor(Math.random()*100)
    let win = false
    let count = 1
    return function(guess){
        if(guess === correctNum){
            if(win) return "The game is over, you already won!"
            win = true
            return `You win! You found ${correctNum} in ${count} guesses.`
        }
        else if(guess < correctNum){
            count ++ 
            return `${guess} is too low!`
        }
        else if(guess > correctNum){
            count ++ 
            return `${guess} is too high!`
        }
    } 
}

module.exports = { guessingGame };
