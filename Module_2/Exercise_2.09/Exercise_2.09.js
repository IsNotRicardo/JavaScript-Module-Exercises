function even(list) {
    let newList = []
    for (let i = 0; i < list.length; i++) {
        if (list[i] % 2 === 0) {
            newList.push(list[i])
        }
    }
    return newList
}

function main() {
    let numList = [2, 7, 4, 9, 11, 8]

    console.log(numList)
    console.log(even(numList))
}

main()
