import express, { Request, Response } from 'express';
import cors from 'cors';
import appRoutes from './Routes/v1';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public/'));

app.use('/api', appRoutes);

// Exporting app for serverless architecture
export default app;