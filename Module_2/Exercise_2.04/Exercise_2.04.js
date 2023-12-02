function numToZero() {
    let numList = []
    while (true) {
        let num = parseInt(prompt("Insert a number. Write 0 to leave."))
        if (num === 0) {
            break
        }
        numList.push(num)
    }

    numList.sort(function (a, b) {
        return b - a
    })
    console.log(numList)
}

numToZero()
