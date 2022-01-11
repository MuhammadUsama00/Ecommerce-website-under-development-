import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Name is required"]
        },
        email:{
            type:String,
            required:[true,"email is required"],
            unique:true,
        },
        password:{
            type:String,
            required:[true,"password is required"]
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
    },
    {
        timestamps:true
    },
)
const User=mongoose.model("User",UserSchema)
export default User