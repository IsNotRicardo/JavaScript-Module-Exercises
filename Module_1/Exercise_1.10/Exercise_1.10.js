function diceProbability() {
    const dice = parseInt(prompt("Insert the number of dice:"))
    const sum = parseInt(prompt("Insert the sum of the eye numbers:"))
    let result = 0

    for (let i = 0; i < 10000; i++) {
        let num = 0
        for (let j = 0; j < dice; j++) {
            num += Math.floor((Math.random() * 6) + 1)
        }
        if (num === sum) {
            result += 1
        }
    }

    let prob = ((result / 10000) * 100).toFixed(2)
    document.write("Probability to get sum " + sum + " with " + dice + " dice is " + prob + "%")
}

diceProbability()
