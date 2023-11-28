function diceRolls() {
    const dice = parseInt(prompt("Insert the number of dice rolls:"))
    let total = 0

    for (let i = 0; i < dice; i++) {
        total += Math.floor(Math.random() * 6 + 1)
    }

    document.write("The sum of your " + dice + " dice is " + total)
}

diceRolls()
