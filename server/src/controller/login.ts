import { Request, Response } from 'express';
import { leerDatos, escribirDatos } from '../config/firebase';

// Obtener todos los usuarios desde Firebase
export const obtenerUsuarios = async (_req: Request, res: Response): Promise<void> => {
  try {
    const usuarios = await leerDatos('usuarios');
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener usuarios', error });
  }
};
    
// Registrar un nuevo usuario en Firebase
export const registrarUsuario = async (req: Request, res: Response): Promise<void> => {
  try {
    const nuevoUsuario = req.body;
    await escribirDatos(`usuarios/${nuevoUsuario.id}`, nuevoUsuario);
    res.status(201).json({ mensaje: 'Usuario registrado con éxito' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al registrar usuario', error });
  }
};
