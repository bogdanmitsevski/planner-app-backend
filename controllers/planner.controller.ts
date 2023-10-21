import { Request, Response } from "express";
import fs from 'fs';
import path from 'path';
import { getTasksUtil, createTaskUtil, updateTaskUtil, deleteTaskUtil } from "../utils/handle.task.util";
class Planner {
    async getTasks(req:Request, res:Response) {
        try {
            const allTasks = await getTasksUtil();
            res.status(200).json(allTasks);
        }
        catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
    }
    async createTask(req:Request, res:Response) {
        try {
            const newTask = await createTaskUtil(req.body);
            res.status(200).json(newTask);
        }
        catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
    }
    async updateTask(req:Request, res:Response) {
        try {
            const updatedTask = await updateTaskUtil(req.body);
            res.status(200).json(updatedTask);
        }
        catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
    }
    async deleteTask(req:Request, res:Response) {
        try {
            await deleteTaskUtil(req.params.id);
            res.status(200).json(req.params.id);
        }
        catch (e) {
            console.log(e);
            res.status(400).json(e)
        }
    }
    async getFile(req:Request, res:Response) {
        try {
            const tasks = await getTasksUtil();
            fs.writeFile('file.txt', JSON.stringify(tasks), (err) =>{
                if(err) {
                    console.log(err);
                }
                else {
                    const filePath = path.join(__dirname, '../file.txt');
                    res.download(filePath, 'file.txt', (err) => {
                        if (err) {
                          console.error("File sending failed:", err);
                          if (!res.headersSent) {
                            res.status(500).send("Error downloading the file.");
                          }
                        } else {
                          console.log("File sent successfully.");
                        }
                      });
                }
            })
        }
        catch (e) {
            console.log(e);
            res.status(400).json(e);
        }
    }
}

export default new Planner