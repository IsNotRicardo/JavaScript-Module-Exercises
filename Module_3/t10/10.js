const targetId = document.getElementById('target')
document.getElementById('source').addEventListener('submit', function (event) {
    event.preventDefault()
    let formEl = event.target
    let fName = formEl.querySelector('[name="firstname"]').value
    let lName = formEl.querySelector('[name="lastname"]').value

    targetId.textContent = "Your name is " + fName + ' ' + lName
})
