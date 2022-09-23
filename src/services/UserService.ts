import db from '../database/prisma';

type UserRequest = {
	username: string;
	pass: string;
	email: string;
};

type UserResponse = {
	id: string;
	username: string;
	pass: string;
	email: string;
};

export default class UserService {
	async createUser(user: UserRequest): Promise<UserResponse> {
		const users = await db.user.findMany();

		if (
			users.find((u) => u.username === user.username) ||
			users.find((u) => u.email === user.email)
		) {
			throw new Error('Username or email already registered');
		}

		const userCreated = await db.user.create({
			data: {
				username: user.username,
				pass: user.pass,
				email: user.email,
			},
		});

		return userCreated;
	}

	async getUser(id: string): Promise<UserResponse> {
		const userFinded = await db.user.findFirst({
			where: { id: id },
		});

		return userFinded;
	}

	async updateUser(id: string, user: UserRequest): Promise<UserRequest> {
		const users = await db.user.findMany();

		if (
			users.find((u) => u.username === user.username) ||
			users.find((u) => u.email === user.email)
		) {
			throw new Error('Username or email already registered');
		}

		const userUpdated = await db.user.update({
			where: { id: id },
			data: {
				username: user.username,
				pass: user.pass,
				email: user.email,
			},
		});

		return userUpdated;
	}

	async deleteUser(id: string): Promise<void> {
		await db.user.delete({
			where: { id: id },
		});
	}
}
