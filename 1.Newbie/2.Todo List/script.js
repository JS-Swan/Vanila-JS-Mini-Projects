const TodoForm=document.querySelector(".todo-form");
const TodoInput=document.querySelector(".todo-form input[type='text']")

const TodoList=document.querySelector(".todo-list")

TodoForm.addEventListener("submit",(e)=>{
 e.preventDefault();
 const newText=TodoInput.value;
 const newLi=document.createElement("li");
const newLiInnerHtml=`<li class="li-items">
          <h4>${newText}</h4>
          <div class="btn">
            <button class="done">Done</button>
            <button class="remove">Remove</button>
          </div>
        </li>`;

  newLi.innerHTML= newLiInnerHtml; 
  TodoList.append(newLi);  
  TodoInput.value=""; 
});
TodoList.addEventListener("click",(e)=>{
  if(e.target.classList.contains("done")){
    const Lih4=e.target.parentNode.previousElementSibling;
    Lih4.style.textDecoration="line-through";
    console.log(Lih4)
  }
  if(e.target.classList.contains("remove")){
    const targetLi=e.target.parentNode.parentNode;
    targetLi.remove();
  }
})


