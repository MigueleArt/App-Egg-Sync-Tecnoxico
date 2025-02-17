import admin from 'firebase-admin';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

// Ajusta la ruta del archivo de credenciales
const serviceAccountPath = path.resolve(__dirname, "../src/credenciales/firebase-credenciales.json");

// Usa import si es necesario
let serviceAccount;
try {
  serviceAccount = require(serviceAccountPath);
} catch (error) {
  console.error("No se pudo cargar el archivo de credenciales:", error);
  throw error;
}

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
