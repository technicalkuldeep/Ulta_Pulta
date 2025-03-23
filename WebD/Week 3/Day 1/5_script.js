let ctr = 1
function deleteTodo () {
    
}




function addTodo () {
    const InputEl = document.querySelector("input");
    const value = InputEl.value;

    const newDivEl = document.createElement("div")
    newDivEl.setAttribute("id","todo-"+ ctr);

    newDivEl.innerHTML = "<div>" + value + "</div>"



    document.querySelector("body").appendChild(newDivEl);
}