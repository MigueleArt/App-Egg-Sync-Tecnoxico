import { Router } from 'express';
import { obtenerUsuarios, registrarUsuario } from '../controller/login';

const router = Router();

// Ruta para obtener todos los usuarios
router.get('/', obtenerUsuarios);

// Ruta para registrar un nuevo usuario
router.post('/', registrarUsuario);

export default router;
