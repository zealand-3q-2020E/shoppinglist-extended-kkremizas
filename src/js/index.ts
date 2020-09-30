//Write your Typescript code here
let inputElement:HTMLInputElement = <HTMLInputElement> document.getElementById("myInput")
let buttonElement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("myButton")
let contentElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content")

let list = document.getElementById("list")


buttonElement.addEventListener("click",addElementWithClick);
inputElement.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        document.getElementById("myButton").click()
        }
    })

function addElementWithClick(){

        // Creating new item from input
        console.log("button click")
        let inputText:string = inputElement.value
        contentElement.innerHTML="You typed "+ inputText
        let newElement = document.createElement("li")
        let newElementText = document.createTextNode(inputText)
        newElement.appendChild(newElementText)
        console.log(newElementText)

        // Health Selection
        let dropdown:HTMLSelectElement = <HTMLSelectElement> document.getElementById("dropdown")
        let dropdownIndex:number = dropdown.selectedIndex
        let dropdownSelection:HTMLOptionElement = dropdown.options[dropdownIndex]
        if (dropdownSelection.getAttribute("id")=="healthy")
            {newElement.setAttribute("class", "healthy")}
        else {newElement.setAttribute("class", "unhealthy")}
        
        // Add new item on the list
        list.appendChild(newElement)

    }

