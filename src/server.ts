import 'express-async-errors';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'dotenv/config';
import { routes } from './routes';

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use(cors());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	if (err instanceof Error) {
		return res.status(400).json({
			error: err.message,
		});
	}

	return res.status(500).json({
		status: 'erro',
		message: 'Erro interno no servidor',
	});
});

app.use(routes);

app.listen(port, () => console.log(`rodando na porta ${port}`));
