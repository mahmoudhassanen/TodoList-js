var Get_data = document.getElementById("getData");
var addBTn = document.getElementById("addBtn");
var addBTn1 = document.getElementById("addBtn1");
var todoList = document.getElementById("todoList");
var clearBtn = document.getElementById("clearBtn");
var pendingTasks = document.getElementById("pendingTasks")
var Todolist = [] ;
var currentPosition = 0;
var getLocalStorage = localStorage.getItem("NewTodo");
if (getLocalStorage == null) {

 Todolist = [] ;
}
else{
  Todolist = JSON.parse(getLocalStorage);
  ShowData();
}
Get_data.onkeyup= () =>
{
  var data = Get_data.value;
  if (data.trim()!=0) {
    addBTn.classList.add("active");
    addBTn1.classList.add("active");
    
  }
  else{
    addBTn.classList.remove("active");
    addBTn1.classList.remove("active");
  }
}

addBTn.onclick = ()=> 
{
  var EnterData = Get_data.value;
  Todolist.push(EnterData)
  localStorage.setItem("NewTodo" , JSON.stringify(Todolist) )
  ShowData();
}
function ShowData() 
{
  pendingTasks.innerHTML = Todolist.length;
  if (Todolist.length >0)
  {
    clearBtn.classList.add("active")
  } else{
    clearBtn.classList.remove("active")
  }
    
  
  var newList = ''
Todolist.forEach((element,index)=> 
{
  
  newList += `<li onclick="update(${index})">${element}<span class="icon" onclick="deleteTask(${index})"><i class="fas fa-trash"></i></span></li>`;
})   
todoList.innerHTML = newList;
Get_data.value = '';
}
function deleteTask(index) {
  Todolist.splice(index,1)
  localStorage.setItem("NewTodo" , JSON.stringify(Todolist));

  ShowData();
  
}
clearBtn.onclick= ()=> {
  Todolist = [];
  localStorage.setItem("NewTodo" , JSON.stringify(Todolist));
  ShowData();

}
function update(index) {
  currentPosition = index;
  Get_data.value = Todolist[currentPosition];
  
  
}
addBTn1.onclick = ()=> {
  Todolist[currentPosition] =   Get_data.value ;
  localStorage.setItem("NewTodo" , JSON.stringify(Todolist));
ShowData();
addBTn.classList.remove("active")
addBTn1.classList.remove("active")
}