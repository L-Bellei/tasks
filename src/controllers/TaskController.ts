import { Request, Response } from 'express';
import TaskService from '../services/TaskService';

export default class TaskController {
	async createTask(req: Request, res: Response) {
		try {
			const { title, content } = req.body;
			const service = new TaskService();

			const task = await service.createTask({ title, content });

			return res.status(201).json(task);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async editTask(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const { title, content } = req.body;
			const service = new TaskService();

			const task = await service.editTask(id, { title, content });

			return res.status(200).json(task);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async getTask(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const service = new TaskService();

			const task = await service.getTask(id);

			return res.status(200).json(task);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async getTasks(req: Request, res: Response) {
		try {
			const service = new TaskService();

			const tasks = await service.getTasks();

			return res.status(200).json(tasks);
		} catch (err) {
			res.status(500).json(err);
		}
	}

	async deleteTask(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const service = new TaskService();

			await service.deleteTask(id);

			return res.status(204).end();
		} catch (err) {
			res.status(500).json(err);
		}
	}
}
