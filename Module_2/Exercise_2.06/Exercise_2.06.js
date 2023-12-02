function randomDice() {
    return Math.floor(Math.random() * 6) + 1
}

function main() {
    let numList = []
    let num

    do {
        num = randomDice()
        numList.push("<li>" + num + "</li>")
    } while (num !== 6)

    document.write("<ul>" + numList.join('') + "</ul>")
}

main()
