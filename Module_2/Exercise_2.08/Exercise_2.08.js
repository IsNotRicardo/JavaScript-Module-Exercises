function concat(list) {
    return list.reduce((string, value) => string + value, '')
}

function main() {
    let string_list = ['Johnny', 'DeeDee', 'Joey', 'Marky']
    document.write(concat(string_list))
}

main()
