function dogCount() {
    let dogList = Array(6)
    for (let i = 0; i < dogList.length; i++) {
        dogList[i] = "<li>" + prompt("Insert the name of dog " + (i + 1)) + "</li>"
    }

    dogList.sort().reverse()
    document.write("<ol>" + dogList.join('') + "</ol>")
}

dogCount()
