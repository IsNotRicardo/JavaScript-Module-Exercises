function squareRoot() {
    if (confirm("Should I calculate a square root?")) {
        const num = parseInt(prompt("Insert a number"))

        if (num < 0) {
            document.write("The square root of a negative number is not defined.")
        } else {
            document.write("The square root of " + num + " is " + Math.sqrt(num).toFixed(4))
        }
    } else {
        document.write("The square root is not calculated.")
    }
}

squareRoot()
