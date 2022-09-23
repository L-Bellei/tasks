import UserController from './controllers/UserController';
import { Router } from 'express';
import TaskController from './controllers/TaskController';

const routes = Router();

//Users
routes.get('/users/:id', new UserController().getUser);
routes.post('/users', new UserController().createUser);
routes.put('/users/:id', new UserController().updateUser);
routes.delete('/users/:id', new UserController().deleteUser);

//Tasks
routes.get('/tasks', new TaskController().getTasks);
routes.get('/tasks/:id', new TaskController().getTask);
routes.post('/tasks', new TaskController().createTask);
routes.put('/tasks/:id', new TaskController().editTask);
routes.delete('/tasks/:id', new TaskController().deleteTask);

export { routes };
