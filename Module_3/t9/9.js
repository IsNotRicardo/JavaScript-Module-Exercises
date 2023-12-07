function calculate() {
    const content = document.getElementById("calculation").value
    let result

    if (content.includes('+')) {
        let numbers = content.split('+')
        result = parseFloat(numbers[0]) + parseFloat(numbers[1])
    } else if (content.includes('-')) {
        let numbers = content.split('-')
        result = parseFloat(numbers[0]) - parseFloat(numbers[1])
    } else if (content.includes('*')) {
        let numbers = content.split('*')
        result = parseFloat(numbers[0]) * parseFloat(numbers[1])
    } else if (content.includes('/')) {
        let numbers = content.split('/')
        result = parseFloat(numbers[0]) / parseFloat(numbers[1])
    }

    document.getElementById("result").innerHTML = result
}