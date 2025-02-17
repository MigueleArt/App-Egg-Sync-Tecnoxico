import express from 'express';
import {
  getIncubadoras,
  createIncubadora,
  updateIncubadora,
  deleteIncubadora,
} from '../controllers/incubadoraController.ts';

const router = express.Router();

router.get('/incubadoras', getIncubadoras);
router.post('/incubadoras', createIncubadora);
router.put('/incubadoras/:id', updateIncubadora);
router.delete('/incubadoras/:id', deleteIncubadora);

export default router;