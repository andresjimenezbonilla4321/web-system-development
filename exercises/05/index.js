import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { requestLogger } from './middlewares/requestLoggerMiddleware.js';
import { unknownEndpoint } from './middlewares/unknownEndpointMiddleware.js';
import bookRouter from './routes/bookRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.use(requestLogger);

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.use('/books', bookRouter);

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
