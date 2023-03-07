window.addEventListener('load',()=>{
    const form=document.querySelector("#todo-form");
    const input=document.querySelector("#todo-input");
    const list=document.querySelector("#tasks");

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        const task=input.value;
        if(!task){
            alert("Please fill the task");
            return;
        }
        const task_el=document.createElement("div");
        task_el.classList.add("task");

        const task_content_el=document.createElement("div");
        task_content_el.classList.add("content");
        // task_content_el.innerText=task; 

        task_el.appendChild(task_content_el);

        const task_input=document.createElement("input");
        task_input.classList.add("text");
        task_input.type="text";
        task_input.value=task;
        task_input.setAttribute("readonly","readonly");
        task_content_el.appendChild(task_input);

        const task_action=document.createElement("div");
        task_action.classList.add("actions");

        const edit_el=document.createElement("button");
        edit_el.classList.add("edit");
        edit_el.innerText="Edit";

        const delete_el=document.createElement("button");
        delete_el.classList.add("delete");
        delete_el.innerText="Delete";

        task_action.appendChild(edit_el);
        task_action.appendChild(delete_el);

        task_el.appendChild(task_action);
        list.appendChild(task_el);
        input.value="";

        edit_el.addEventListener('click',()=>{
            if(edit_el.innerText.toLocaleLowerCase()=="edit"){
                task_input.removeAttribute("readonly");
                task_input.focus();
                edit_el.innerText="Save";
            }
            else{
                task_input.setAttribute("readonly","readonly");
                edit_el.innerText="Edit";
            }
              
        });
        delete_el.addEventListener('click',()=>{
            list.removeChild(task_el);
        });
    });
});