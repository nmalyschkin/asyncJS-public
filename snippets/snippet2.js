const taskA = () => fetch("./resource-A");
const taskB = (a) => fetch("./resource-B");
const taskC = (b) => fetch("./resource-C");

// or

const taskToBeExecutendSequentially = [taskA, taskB, taskC, ...moreTasks];