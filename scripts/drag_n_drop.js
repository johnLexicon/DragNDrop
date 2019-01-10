
function onDragStart(ev){
    console.log("onDragStart");
    ev.dataTransfer.effectAllowed = 'copy';
    ev.dataTransfer.setData("Text", div.textContent);
}

function onDragLeave(ev){
    console.log("onDragLeave");
}

function onDrag(ev){
    console.log(`onDrag`);
}

function onDragEnter(ev){
    console.log("onDragEnter");
}

function onDragEnd(ev){
    console.log("onDragEnd");
}




// let div = document.getElementById("draggableDiv");
// div.addEventListener("dragstart", onDragStart);
// div.addEventListener("dragleave", onDragLeave);
// div.addEventListener("drag", onDrag);
// div.addEventListener("dragenter", onDragEnter);
// div.addEventListener("dragend", onDragEnd);

let todoDiv = document.getElementById('todoDiv');
todoDiv.addEventListener('drop', appendTodo)
todoDiv.addEventListener('dragover', onDragOver);

let todoListUl = document.querySelector("#todoDiv ul");

function onDragOver(ev){
    if(ev.preventDefault)
        ev.preventDefault();

    console.log("onDragOver");
    ev.dataTransfer.dropEffect = 'copy';
}

function appendTodo(ev){
    if(ev.stopPropagation)
        ev.stopPropagation();

    const data = ev.dataTransfer.getData("Text");
    let liElem = document.createElement('li');
    liElem.appendChild(document.createTextNode(data));
    todoListUl.appendChild(liElem);
}

function createPostit(textContent) {
    //<div draggable="true" id="draggableDiv" class="postit">Buy milk</div>
    let postitDiv = document.createElement('div');
    postitDiv.appendChild(document.createTextNode(textContent));
    postitDiv.classList.add("postit");
    postitDiv.id = "draggableDiv";
    postitDiv.setAttribute("draggable", true);
    postitDiv.addEventListener("dragstart", onDragStart);
    document.getElementById('rightCol').appendChild(postitDiv);
}

createPostit("Meat");