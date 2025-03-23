let ctr = 1;
function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
}


function addTodo() {
    const InputEl = document.querySelector("input");
    const value = InputEl.value;

    const newDivEl = document.createElement("div");
    newDivEl.setAttribute("id","todo-"+ ctr);
    // newDivEl.innerHTML = value;
    newDivEl.innerHTML = "<div>" + value + '</div> <button onclick = "deleteTodo(' + ctr + ')">delete</button>';
    ctr = ctr + 1;

    document.querySelector("body").appendChild(newDivEl);
}