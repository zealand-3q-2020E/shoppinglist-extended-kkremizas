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

function addElementWithClick(m:MouseEvent){
        console.log("button click")
        let inputText:string = inputElement.value
        contentElement.innerHTML="You typed "+ inputText
        let newElement = document.createElement("li")
        let newElementText = document.createTextNode(inputText)
        newElement.setAttribute("id","10")
        newElement.setAttribute("class", "unhealthy")
        newElement.appendChild(newElementText)
        console.log(newElementText)
        list.appendChild(newElement)
    }

