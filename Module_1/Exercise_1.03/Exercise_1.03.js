function mathOperations() {
    const ints = Array(3)

    for (let i = 0; i < ints.length; i++) {
        ints[i] = parseInt(prompt("Insert integer " + (i + 1) + ':'))
    }

    const sum = ints.reduce((partSum, value) => partSum + value, 0)
    const prod = ints.reduce((partProd, value) => partProd * value, 1)
    const average = (sum / 3).toFixed(2).toString()

    document.getElementById("sum").textContent = sum
    document.getElementById("prod").textContent = prod
    document.getElementById("average").textContent = average
}

mathOperations()
