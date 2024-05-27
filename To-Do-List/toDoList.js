
const item = document.querySelector("#item");

const toDoBox = document.querySelector("#to-do-box");

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter" && this.value != ""){
            // this.value means the text typed in input box and this refers to item 
            addTodo(this.value);
            this.value = "";
        }
    }
)

// you can add by Enter as well as by ADD button 
const add = document.querySelector("#add");

add.addEventListener(
    "click",
    function(event){
            // this.value means the text typed in input box and this refers to item 
            if(item.value != ""){
                addTodo(item.value);
                item.value = "";
            }
        }
)

const check = document.getElementById("#check");

const addTodo = (item) =>{
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item}
    <i class="fa fa-check" id="check"></i>
    <i id="edit">EDIT</i>
    <i class="fa fa-times" id="delete"></i>
    `;

    listItem.querySelector("#check").addEventListener(
        "click",
        function(){
            listItem.style.textDecoration = "line-through";
            listItem.style.backgroundColor = "#545454";
            listItem.style.color = "rgb(201, 12, 235)";
        }
    );

    listItem.querySelector("#delete").addEventListener(
        "click",
        function(){
            listItem.remove();
        }

    );

    listItem.querySelector("#edit").addEventListener(
        "click",
        function(){
            const inputReFill = document.querySelector("#item");
            
            inputReFill.setAttribute = (this.item," ");
            listItem.remove();


        }
    );

    toDoBox.appendChild(listItem);
}