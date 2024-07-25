/* this function gets the task from input */

function get_todos() {

    /* This creates an array of tasks that are inputted*/

    var todos = new Array;

    /*This pulls the task that was saved in the web browser memory*/

    var todos_str = localStorage.getItem('todo');

    /*If the input is not null then JSON.parse will communicate with the web browser to make the task a

    JavaScript Object.*/

    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
       
    }

    return todos;

}

/*This function adds the inputed task to the get_todos function array*/

function add() {

    /*This takes the inputed task and creates a variable of it*/

    var task = document.getElementById('task').value;


    var todos = get_todos();

    /*This adds a new task at the end of the array */
    if(task.length !== 0) {
        todos.push(task);

        /*This converts the task input to a JSON string*/
    
        localStorage.setItem('todo', JSON.stringify(todos));
    
        document.getElementById("task").value = "";
    
        show();
    }

    return false;

}




/*This function keeps the tasks permanently displayed on the screen*/

function show() {

    /*This sets the task that was retrieved as a variable*/

    var todos = get_todos();

    var buttons = document.getElementsByClassName('remove');


    /*This sets up each task as an unordered list*/

    var html = '<ul>';

    /*This displays a task to the list in the order that is it inputed*/

    for (var i = 0; i < todos.length; i++) {

        /*this also displays the task as a list and creates the button with the "x"*/
        html += '<li>'  + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';

    };

    html += '</ul>';

    /*This displays the inputed task when the 'Add Item' button is clicked*/

    document.getElementById('todos').innerHTML = html;

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].addEventListener('click', remove);

    };


}




/* This displays the inputed task when the 'Add Item' button is clicked*/

document.getElementById('add').addEventListener('click', add);

/*this will keep the inputs displayed permanently on the screen*/

show(); 




/*this creates the functionality of removing a todo item from the array*/

function remove () {

    var id = this.getAttribute('id');

    var todos = get_todos();

    todos.splice(id, 1);

    localStorage.setItem('todo', JSON.stringify(todos));

    /*This looks in the show () how to display a removed item on the screen */

    show();

    return false;

}