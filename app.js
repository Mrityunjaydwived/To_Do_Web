let todo = [];
let req = prompt("enter the request you want to execute.");
while(true){
  if(req == "quit"){
    console.log("quiting app");
    break;
  }
  else if(req == "list"){
    console.log("___________________________________")
    for(let i = 0; i < todo.length; i++){
      console.log(i,todo[i]);
    }
    console.log("___________________________________")
  }
  else if(req == "add"){
    let task = prompt("enter the task you want to add.");
    todo.push(task);
    console.log("task added");
  }
  else if(req == "delete"){
    let idx = prompt("enter the index of the task you want to delete.");
    todo.splice(idx,1);
    console.log("task deleted");
  }
  req = prompt("please again enter if another request.")
}