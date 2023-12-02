function reverseArray() {
    let num = Array(5)
    for (let i = 0; i < num.length; i++) {
        num[i] = parseInt(prompt("Insert number " + (i + 1) + ":"))
    }

    for (let i = num.length - 1; i >= 0; i--) {
        console.log(num[i])
    }
}

reverseArray()
