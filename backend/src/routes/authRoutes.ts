import express from 'express';
import { login, register } from '../controllers/authController.ts';

const router = express.Router();

// Ruta para registro (POST)
router.post('/register', register);

// Ruta para inicio de sesión (POST)
router.post('/login', login);

export default router;