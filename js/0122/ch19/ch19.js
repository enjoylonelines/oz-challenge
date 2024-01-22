const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
let todoArr = [];

//로컬스토리지 저장
function saveTodos(){
    const todoString = JSON.stringify(todoArr);
    localStorage.setItem('myTodos', todoString);
}
//로컬스토리지 참조
function loadTodos(){
    const myTodos = localStorage.getItem('myTodos');
    if(myTodos != null){
        todoArr = JSON.parse(myTodos);
        displayTodos(); 
    }
}
loadTodos();
// 디스플레이
function displayTodos(){
    todoList.innerHTML = '';
    todoArr.forEach(function(item){
        const todoLi = document.createElement('li');
        todoLi.innerText = item.todoText;
        todoLi.title = '클릭하면 완료'
        todoForm.todo.value = '';
        //삭제 버튼 추가
        const delBtn = document.createElement('span');
        delBtn.innerText = 'x';
        delBtn.title = '클릭하면 삭제'
        todoLi.append(delBtn);
        // 수정 사항 업데이트
        if(item.isDone) todoLi.classList.add('done');
        else todoLi.classList.add('yet'); //왜 얘네가 올라가 있어야 될까?? 
        
        todoList.append(todoLi);
        
        todoLi.addEventListener('click', function(){
            handleTodos(item.todoId);   
        })    
        delBtn.addEventListener('click',function(){
            delTodos(item.todoId);
        })
    })
}
// 할일 객체 추가
function addTodos(){
      const TodoItem = {
        todoText: todoForm.todo.value,
        todoId: new Date().getTime(),
        isDone: false,
    }
    todoArr.push(TodoItem);
}
// 할일 수정
function handleTodos(clickedId){
    todoArr = todoArr.map(function(item){
        if(item.todoId == clickedId){
            return {
                ...item, isDone: !item.isDone,
            }
        }
        else{
            return item;
        }
    })
    displayTodos();
}
// 할일 삭제
function delTodos(clickedId){
    todoArr = todoArr.filter(function(item){
        return item.todoId != clickedId;
    })
    displayTodos();
    saveTodos();
}

todoForm.addEventListener('submit', function(e){
    e.preventDefault();
    addTodos();
    displayTodos();
    saveTodos();
    loadTodos();
})