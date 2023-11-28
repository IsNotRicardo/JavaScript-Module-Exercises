function isPrime() {
    const num = parseInt(prompt("Insert a number:"))
    let prime = false

    if (num > 1) {
        prime = true
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                prime = false
                break
            }
        }
    }

    if (prime) {
        document.write(num + " is a prime number.")
    } else {
        document.write(num + " is not a prime number.")
    }
}

isPrime()
