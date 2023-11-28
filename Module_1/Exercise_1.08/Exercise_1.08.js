function leapInterval() {
    let sYear = parseInt(prompt("Insert a start year: "))
    let fYear = parseInt(prompt("Insert an end year: "))
    let leapYears = "<ul>"

    for (let year = sYear; year < fYear; year++) {
        if (year % 4 === 0) {
            if (year % 100 === 0) {
                if (year % 400 === 0)
                    leapYears += "<li>" + year + "</li>"
            } else {
                leapYears += "<li>" + year + "</li>"
            }
        }
    }

    leapYears += "</ul>"
    document.write(leapYears)
}

leapInterval()
