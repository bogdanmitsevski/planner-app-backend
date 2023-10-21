import express from 'express';
import plannerController from '../controllers/planner.controller';
const router = express.Router();
router.get('/get', plannerController.getTasks);
router.post('/create', plannerController.createTask);
router.put('/update', plannerController.updateTask);
router.delete('/delete/:id', plannerController.deleteTask);
router.get('/download', plannerController.getFile);

export default router;