import { Task } from "../db/models";

interface ITask {
    id:string,
    title:string,
    description:string,
    label:string,
    day:string
}
async function getTasksUtil () {
    try {
        return await Task.findAll();
    }
    catch (e) {
        console.log(e);
        return e;
    }
}
async function createTaskUtil (task:ITask) {
    try {
        const newTask = await Task.create({
            id: String(Date.now()),
            title: task.title,
            description: task.description,
            label: task.label,
            day: task.day
        });
        await newTask.save();
        return newTask;
    }
    catch (e) {
        console.log(e);
        return e;
    }
}

async function updateTaskUtil (task: ITask) {
    try {
        await Task.update({
            title: task.title,
            description: task.description,
            label: task.label,
            day: task.day
        },{
            where: {
                id: task.id
            }
        })
        return await Task.findOne({
            where: {
                id:task.id
            }
        });
    }
    catch (e) {
        console.log(e);
        return e;
    }
}

async function deleteTaskUtil(id:string) {
    try {
        await Task.destroy({
            where: {
                id:id
            }
        })
        return id;
    }
    catch (e) {
        console.log(e);
        return e;
    }
}

export {
    getTasksUtil,
    createTaskUtil,
    updateTaskUtil,
    deleteTaskUtil
}