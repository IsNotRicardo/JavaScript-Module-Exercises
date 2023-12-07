const target = document.getElementById("target")
const newList = Array(3)

for (let i = 0; i < newList.length; i++) {
    newList[i] = document.createElement("li")
    target.appendChild(newList[i])
}

newList[0].textContent = "First item"
newList[1].textContent = "Second item"
newList[2].textContent = "Third item"

newList[1].classList.add("my-item")
