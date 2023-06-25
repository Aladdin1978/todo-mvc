const deleteBtn = document.querySelectorAll(".del");
const todoItem = document.querySelectorAll("span.not");
const todoComplete = document.querySelectorAll("span.completed");

Array.from(deleteBtn).forEach((el) => {
  el.addEventListener("click", deleteTodo);
});

async function deleteTodo() {
  const todoID = this.parentNode.dataset.id;

  try {
    const response = await fetch("todos/deleteTodo", {
      method: "delete",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        todoIdFromJSFile: todoId,
      }),
    });
    const data = await response.json();
    console.log(data);
    location.reload();
  } catch (err) {
    console.log(err);
  }
}

async function markComplete(){
  const todoId = this.parentNode.dataset.id
  try{
    const response = await fetch('todos/markComplete',{
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        'todoIdFromJSFile: todoId'
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  }catch(err){
    console.log(err)
  }
}


async function markIncomplete(){
  const todoID = this.parentNode.dataset.id
  try{
    const response = await fetch('todos/markIncomplete', {
      method: 'put',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        'todoIdFromJSFile': todoId
      })
    })
    const data = await response.json()
    console.log(data)
    location.reload()
  }catch(err){
    console.log(err)
  }
}