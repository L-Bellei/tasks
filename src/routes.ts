import { Router } from 'express';
import TaskController from './controllers/TaskController';

const routes = Router();

routes.get('/tasks', new TaskController().getTasks);
routes.get('/tasks/:id', new TaskController().getTask);

routes.post('/tasks', new TaskController().createTask);

routes.put('/tasks/:id', new TaskController().editTask);

routes.delete('/tasks/:id', new TaskController().deleteTask);

export { routes };
