import { Request, Response } from 'express';
import { Incubadora } from '../models/Incubadora.ts';

// Obtener todas las incubadoras
export const getIncubadoras = async (req: Request, res: Response): Promise<void> => {
  try {
    const incubadoras = await Incubadora.find();
    res.status(200).json(incubadoras);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las incubadoras' });
  }
};

// Crear una nueva incubadora
export const createIncubadora = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.body;
  try {
    const newIncubadora = new Incubadora({ name });
    await newIncubadora.save();
    res.status(201).json(newIncubadora);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la incubadora' });
  }
};

// Actualizar una incubadora
export const updateIncubadora = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const updatedIncubadora = await Incubadora.findByIdAndUpdate(id, { name }, { new: true });
    res.status(200).json(updatedIncubadora);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la incubadora' });
  }
};

// Eliminar una incubadora
export const deleteIncubadora = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await Incubadora.findByIdAndDelete(id);
    res.status(200).json({ message: 'Incubadora eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la incubadora' });
  }
};