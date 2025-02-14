import mongoose from "mongoose";


export connectDb = async () =>{
    try { 
await mongoose.connect('mongod://localhost/eggsync');
        console.log(">>>>> DB is connect")
    } catch (error){
        console.log(error);
    }
};
