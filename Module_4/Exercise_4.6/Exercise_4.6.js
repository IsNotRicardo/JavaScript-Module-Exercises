const results = document.getElementById("results")
document.getElementById('source').addEventListener('submit', function (event) {
    event.preventDefault()

    let query = document.getElementById('query').value
    let action = event.target.action

    fetch(action + "?query=" + query)
        .then(response => response.json())
        .then(data => {
            results.innerHTML = ''
            data.result.forEach(joke => {
                let articleEl = document.createElement("article")
                let pEl = document.createElement("p")

                pEl.textContent = joke.value
                articleEl.appendChild(pEl)
                results.appendChild(articleEl)
            })
        })
})
