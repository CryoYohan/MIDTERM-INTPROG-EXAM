let tasks = [];

let taskId = 1;

class Task {
    constructor(name, description){
        this.id = taskId++,
        this.name = name,
        this.description = description
    }

    toString(){
        return `Task ID: ${this.id}\nTask Name: ${this.name}\nDescription: ${this.description}\n`
    }
}


// Add task object
const addTask = (task) => {
    tasks.push(task);
    console.log('Task Added successfully!')
}


// View Tasks
const viewTasks = () => {
    console.log('List of Tasks')

    if (tasks.length == 0) {
        console.log('No tasks at the moment...')
    }
    tasks.forEach(task =>{
        console.log(task.toString())
    })
}

// Update Task

const updateTask = (id,newTask) => {
    existingTask = tasks.find(task => task.id === id);

    if (!existingTask){
        console.log('Task does not exist!');
        return;
    }

    existingTask.name = newTask.name;
    existingTask.description = newTask.description;

    console.log(`Task ID ${existingTask.id} has been updated!`);
}


// Delete Task

const deleteTask = (id) => {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) {
        console.log('Task not found.');
        return;
    }
    tasks.splice(index, 1);
    console.log(`Task ID: ${id} successfully deleted`);
};


task1 = new Task('First Task', 'My First Task woooh');
console.log(addTask(task1));

console.log(viewTasks());

newTask = new Task('Updated Task', 'Task')

console.log(updateTask(1,newTask))

console.log(viewTasks());


console.log(deleteTask(1));

console.log(viewTasks());