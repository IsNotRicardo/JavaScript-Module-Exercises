function randomDice(faces) {
    return Math.floor(Math.random() * faces) + 1
}

function main() {
    const faces = parseInt(prompt("Insert the number of faces in the dice."))
    let numList = []
    let num

    do {
        num = randomDice(faces)
        numList.push("<li>" + num + "</li>")
    } while (num !== faces)

    document.write("<ul>" + numList.join('') + "</ul>")
}

main()
