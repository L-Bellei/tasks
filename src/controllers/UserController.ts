import { Request, Response } from 'express';
import UserService from '../services/UserService';

export default class UserController {
	async createUser(req: Request, res: Response) {
		try {
			const { username, pass, email } = req.body;

			const service = new UserService();

			const user = await service.createUser({ username, pass, email });

			return res.status(201).json(user);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async getUser(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const service = new UserService();

			const user = await service.getUser(id);

			return res.status(200).json(user);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async updateUser(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const { username, pass, email } = req.body;
			const service = new UserService();

			const user = await service.updateUser(id, { username, pass, email });

			return res.status(200).json(user);
		} catch (err) {
			throw new Error(err.message);
		}
	}

	async deleteUser(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const service = new UserService();

			await service.deleteUser(id);

			return res.status(204).end();
		} catch (err) {
			throw new Error(err.message);
		}
	}
}
