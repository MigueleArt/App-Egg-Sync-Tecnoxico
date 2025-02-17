import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const IncubadoraSchema = new Schema({
  name: { type: String, required: true },
});

export const Incubadora = model('Incubadora', IncubadoraSchema);
