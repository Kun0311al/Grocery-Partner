let myList = []
const inputEl = document.getElementById("input-el")
const btnEl = document.getElementById("btn-el")
const deleteEl = document.getElementById("delete-el")
let listEl = document.getElementById("list-el")

btnEl.addEventListener("click",function(){
    myList.push(inputEl.value)
    inputEl.value = ""
    loadItem()
})

deleteEl.addEventListener("click",function(){
    while(myList.length > 0) {
    myList.pop();
    }
    let listElement = ""
    for(let i = 0; i < myList.length; i++){
        listElement += `
        <li>
            ${myList[i]}
        </li>`
    }
    listEl.innerHTML = listElement
})

function loadItem(){
    let listElement = ""
    for(let i = 0; i < myList.length; i++){
        listElement += `
        <li>
            ${myList[i]}
        </li>`
    }
    listEl.innerHTML = listElement
}
