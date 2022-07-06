let num = Math.random()*10
console.log("Fortune Selected: " + num)
function determineFortune() {
    if(num >= 0 && num < 3)
        return "low fortune :("
    else if(num >= 3 && num < 7)
        return "average fortune :/"
    else if(num >= 7 && num <= 10)
        return "high fortune :D"
    else
        return "something has gone terribly wrong :("
}
console.log(determineFortune())