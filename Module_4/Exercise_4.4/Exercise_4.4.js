const results = document.getElementById("results")
document.getElementById('source').addEventListener('submit', function (event) {
    event.preventDefault()

    let query = document.getElementById('query').value
    let action = event.target.action

    fetch (action + '?q=' + query)
        .then(response => response.json())
        .then(data => {
            results.innerHTML = ''
            data.forEach(tv_show => {
                let articleEl = document.createElement('article')
                let titleEl = document.createElement('h2')
                let aEl = document.createElement('a')
                let imgEl = document.createElement('img')
                let divEl = document.createElement('div')

                titleEl.textContent = tv_show.show.name
                articleEl.appendChild(titleEl)

                aEl.href = tv_show.show.url
                aEl.target = "_blank"
                articleEl.appendChild(aEl)

                imgEl.src = tv_show.show.image ? tv_show.show.image.medium :
                    'https://via.placeholder.com/210x295?text=Not%20Found'
                imgEl.alt = tv_show.show.name
                articleEl.appendChild(imgEl)

                divEl.innerHTML = tv_show.show.summary
                articleEl.appendChild(divEl)

                results.appendChild(articleEl)
            })
        })
})