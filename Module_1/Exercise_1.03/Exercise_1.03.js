function mathOperations() {
    const ints = Array(3)

    for (let i = 0; i < ints.length; i++) {
        ints[i] = parseInt(prompt("Insert integer " + (i + 1) + ':'))
    }

    const sum = ints.reduce((partSum, value) => partSum + value, 0)
    const values= {
        "sum": sum,
        "prod": ints.reduce((partProd, value) => partProd * value, 1),
        "average": (sum / 3).toFixed(2).toString()
    }

    for (let id in values) {
        document.getElementById(id).textContent = values[id]
    }
}

mathOperations()
