function addTodo() {
    const InputEl = document.querySelector("input");
    const value = InputEl.value;

    const newDivEl = document.createElement("div");
    newDivEl.innerHTML = value;

    document.querySelector("body").appendChild(newDivEl);
}