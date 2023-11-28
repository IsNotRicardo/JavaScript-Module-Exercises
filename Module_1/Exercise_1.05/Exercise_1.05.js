function leapYear() {
    const year = parseInt(prompt("Insert a year"))

    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            document.write(year + " is not a leap year.")
        } else {
            document.write(year + " is a leap year.")
        }
    } else {
        document.write(year + " is not a leap year.")
    }
}

leapYear()
