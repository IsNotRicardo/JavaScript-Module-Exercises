function numToRepeat() {
    let numList = []
    while (true) {
        let num = parseInt(prompt("Insert a number. Write the same one to leave."))
        if (numList.includes(num)) {
            console.log("Number " + num + " has already been given.")
            break
        }
        numList.push(num)
    }

    numList.sort(function (a, b) {
        return a - b
    })
    console.log(numList)
}

numToRepeat()
