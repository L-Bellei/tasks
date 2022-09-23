import db from '../database/prisma';

type TaskRequest = {
	title: string;
	content: string;
};

type TaskResponse = {
	id: string;
	title: string;
	content: string;
};

export default class TaskService {
	async createTask(task: TaskRequest): Promise<TaskResponse> {
		const createdTask = await db.task.create({
			data: {
				title: task.title,
				content: task.content,
			},
			select: {
				id: true,
				title: true,
				content: true,
			},
		});

		return createdTask;
	}

	async editTask(id: string, task: TaskRequest): Promise<TaskResponse> {
		const editedTask = await db.task.update({
			where: {
				id: id,
			},
			data: {
				title: task.title,
				content: task.content,
			},
			select: {
				id: true,
				title: true,
				content: true,
			},
		});

		return editedTask;
	}

	async getTask(id: string): Promise<TaskResponse | null> {
		const task = await db.task.findFirst({
			where: { id: id },
			select: {
				id: true,
				title: true,
				content: true,
			},
		});

		return task ? task : null;
	}

	async getTasks(): Promise<TaskResponse[] | null> {
		const tasks: TaskResponse[] = await db.task.findMany({
			select: {
				id: true,
				title: true,
				content: true,
			},
		});

		return tasks.length > 0 ? tasks : null;
	}

	async deleteTask(id: string): Promise<void> {
		await db.task.delete({ where: { id: id } });
	}
}
