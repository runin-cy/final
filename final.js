let todo = "";
const list = [];
const todoList = document.querySelector("#todoList");
const sectionTag = document.querySelector("section");

document.querySelector('#todoListForm').addEventListener("submit",function(event){
    event.preventDefault();

    todo = todoList.value;
    console.log();
    list.push();
 
    let template =
    `
    <h2>Todo: ${todo}</h2>
    `;
    sectionTag.innerHTML = template;
})
