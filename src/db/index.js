import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";



const connectDB = async () => {
    try{
      const connectionInstance =await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`); //mongoose return object deta h jo ki connect hone ke baad responses ko store krke rkhta h(host port etc))
      console.log(`\n MongoDb connected !! DB Host : ${connectionInstance.connection.host} \n`);
    } catch (error) {
        console.log("MONGODB connection ", error);
        process.exit(1); // Exit the process with an error code(node js process provide krta h jo ki reference h current running application ka, aur usme exit method hota h jisse hum process ko exit kr skte h, aur usme hum error code pass kr skte h, jisse pata chalta h ki process kyu exit hua)
    }
};    

export default connectDB;