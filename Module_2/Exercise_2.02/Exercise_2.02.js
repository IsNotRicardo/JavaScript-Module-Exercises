function participantList() {
    const num = parseInt(prompt("Insert the number of participants:"))
    let participantList = Array(num)

    for (let i = 0; i < num; i++) {
        participantList[i] = "<li>" + prompt("Insert the name of participant " + (i + 1)) + "</li>"
    }

    participantList.sort()
    document.write("<ol>" + participantList.join('') + "</ol>")
}

participantList()
