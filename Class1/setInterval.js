let count = 10
function countDown() {
    if(count > 0) {

        console.log(count)
        count--
    }
    else if(count <= 0) {
        let intervalRunning = false
    }
}

setInterval(countDown, 500)