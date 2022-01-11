import mongoose from 'mongoose'
const connect=() =>{
    mongoose
    .connect(process.env.MONGO_URI)
    .then((con)  =>{
        console.log(
            `✅✅✅ Database is connected to the host ${con.connection.host}`.inverse.green.underline
        )
    })
    .catch((err) =>{
        console.log(
            "❌❌❌ Error connecting database : " + err.message.inverse.red
          );
          process.exit(1);

    })
}
export default connect;