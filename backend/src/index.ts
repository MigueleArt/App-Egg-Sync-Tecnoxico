import app from "./app.ts";  
import { connectDB } from "./db.ts";  

connectDB();

app.listen(3000, () => {
    console.log('Server on port 3000');
});