function sortingHat() {
    const name = prompt("I am the sorting hat. Tell me your name.")
    let house

    switch (Math.floor(Math.random() * 4) + 1) {
        case 1:
            house = 'Gryffindor'
            break;
        case 2:
            house = 'Slytherin'
            break;
        case 3:
            house = 'Hufflepuff'
            break;
        case 4:
            house = 'Ravenclaw'
            break;
    }

    document.write(name + ", you are a " + house)
}

sortingHat()
