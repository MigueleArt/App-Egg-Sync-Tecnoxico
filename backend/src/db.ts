import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try { 
        await mongoose.connect('mongodb://localhost:27017/eggsync');
        console.log(">>>>> Base de datos conectada (: <<<<<");
    } catch (error) {
        console.error(error);
    }
};
