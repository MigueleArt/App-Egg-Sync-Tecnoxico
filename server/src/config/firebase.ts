import admin from 'firebase-admin';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const serviceAccountPath = path.resolve(__dirname, '../../firebase-key.json');
const serviceAccount = require(serviceAccountPath);


// Inicializa Firebase Admin
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

const db = admin.database();

// Función para leer datos desde Firebase
export const leerDatos = async (ruta: string): Promise<Record<string, unknown> | null> => {
  try {
    const snapshot = await db.ref(ruta).once('value');
    return snapshot.val();
  } catch (error) {
    console.error('Error al leer datos:', error);
    throw error;
  }
};

// Función para escribir datos en Firebase
export const escribirDatos = async (ruta: string, datos: Record<string, unknown>): Promise<void> => {
  try {
    await db.ref(ruta).set(datos);
    console.log(`Datos escritos en la ruta "${ruta}"`);
  } catch (error) {
    console.error('Error al escribir datos:', error);
    throw error;
  }
};

export default db;
