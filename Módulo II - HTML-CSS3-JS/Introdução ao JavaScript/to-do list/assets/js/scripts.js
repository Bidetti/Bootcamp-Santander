const formWrapper = document.getElementById('add-list');
const list = document.getElementById("list")

formWrapper.onsubmit = function(event) {
    event.preventDefault();
    const inputField = document.getElementById("list-value")
    addList(inputField.value)
    formWrapper.reset();
}

function addList(text){
    const listDiv = document.createElement('div')
    const newList = document.createElement("input")
    const listValue = document.createElement('value')
    const listText = document.createTextNode(text)

    newList.setAttribute("type", "checkbox")
    newList.setAttribute("name", text)
    newList.setAttribute("id", text)

    listValue.setAttribute('for', text)
    listValue.appendChild(listText)

    listDiv.classList.add("list-item")
    listDiv.appendChild(newList)
    listDiv.appendChild(listValue)

    list.appendChild(listDiv)
}