//Write your Typescript code here
let inputElement:HTMLInputElement = <HTMLInputElement> document.getElementById("myInput")
let buttonElement:HTMLButtonElement = <HTMLButtonElement> document.getElementById("myButton")
let contentElement: HTMLDivElement = <HTMLDivElement>document.getElementById("content")

let list = document.getElementById("list")
let listItems:HTMLCollectionOf<HTMLLIElement> = <HTMLCollectionOf<HTMLLIElement>> list.children

calculateHealthiness()

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

        // Ascending id in new item
        let lastChild:HTMLLIElement = <HTMLLIElement> list.lastElementChild
        let lastChildId:number = +lastChild.getAttribute("id")
        let newElementId:number = lastChildId +1
        newElement.setAttribute("id",newElementId.toString())

        // Health Selection
        let dropdown:HTMLSelectElement = <HTMLSelectElement> document.getElementById("dropdown")
        let dropdownIndex:number = dropdown.selectedIndex
        let dropdownSelection:HTMLOptionElement = dropdown.options[dropdownIndex]
        if (dropdownSelection.getAttribute("id")=="healthy")
            {newElement.setAttribute("class", "healthy")}
        else {newElement.setAttribute("class", "unhealthy")}
        
        // Add new item on the list
        list.appendChild(newElement)

        calculateHealthiness()
    }


// calculate healthiness of shopping list

function calculateHealthiness(){

        
var healthCount = 0
for (let index = 0; index < listItems.length; index++) {
    const element = listItems[index];
    if (element.getAttribute("class")=="healthy")
     healthCount++
}
var healthiness = (healthCount/listItems.length*100).toFixed(1).toString()+"% healthy"
let healthinessHeader:HTMLParagraphElement = <HTMLParagraphElement> document.getElementById("listHealth")
healthinessHeader.innerHTML = healthiness
}   

