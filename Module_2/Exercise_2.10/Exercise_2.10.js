function votingProgram() {
    const candidates = prompt("Insert the number of candidates:")
    const candidateList = []

    for (let i = 0; i < candidates; i++) {
        candidateList[i] = {
            "name": prompt("Name for candidate " + (i + 1) + ":"),
            "votes": 0
        }
    }

    const voters = prompt("Insert the number of voters:")
    let vote = ''

    for (let i = 0; i < voters; i++) {
        vote = prompt("Voter " + (i + 1) + ", who do you want to vote for?")
        let candidate = candidateList.find(candidate => candidate.name === vote)
        if (candidate) {
            candidate.votes += 1
        }
    }

    candidateList.sort(function (a, b) {
        return b.votes - a.votes
    })

    console.log("The winner is " + candidateList[0].name + " with " + candidateList[0].votes + " votes.")
    console.log("Results:")
    for (let i = 0; i < candidateList.length; i++) {
        console.log(candidateList[i].name + ": " + candidateList[i].votes + " votes")
    }
}

votingProgram()
