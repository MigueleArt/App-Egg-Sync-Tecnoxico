import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.ts';
import incubadoraRoutes from './routes/incubadoraRoutes.ts';

const app = express();

app.use(morgan('dev'));
app.use(express.json()); 

// Usar las rutas de autenticación
app.use('/api/auth', authRoutes);
app.use('/api', incubadoraRoutes);

export default app;