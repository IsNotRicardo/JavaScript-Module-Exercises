function diceProbability() {
    const dice = parseInt(prompt("Insert the number of dice:"))
    const sum = parseInt(prompt("Insert the sum of the eye numbers:"))
    const tries_amount = 10_000
    let result = 0

    for (let i = 0; i < tries_amount; i++) {
        let num = 0
        for (let j = 0; j < dice; j++) {
            num += Math.floor((Math.random() * 6) + 1)
        }
        if (num === sum) {
            result += 1
        }
    }

    let prob = ((result / tries_amount) * 100).toFixed(2)
    document.write("Probability to get sum " + sum + " with " + dice + " dice is " + prob + "%")
}

diceProbability()
