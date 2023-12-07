'use strict';
const students = [
    {
        name: 'John',
        id: '2345768',
    },
    {
        name: 'Paul',
        id: '2134657',
    },
    {
        name: 'Jones',
        id: '5423679',
    },
];
const target = document.getElementById("target")
const newOption = Array(students.length)

for (let i = 0; i < newOption.length; i++) {
    newOption[i] = document.createElement("option")
    newOption[i].value = students[i].id
    newOption[i].textContent = students[i].name
    target.appendChild(newOption[i])
}
