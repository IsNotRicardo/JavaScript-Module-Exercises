document.getElementById('source').addEventListener('submit', function (event) {
    event.preventDefault()

    let query = document.getElementById('query').value
    let action = event.target.action

    fetch (action + '?q=' + query)
        .then(response => response.json())
        .then(data => console.log(data))
})