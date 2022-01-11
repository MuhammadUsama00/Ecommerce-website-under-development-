import dotenv from 'dotenv'
import colors from 'colors'
import User from './MODELS/users.js'
import Product from './MODELS/products.js'
import users from './data/user.js'
import products from './data/products.js'
import connectDB from './config/database.js'
dotenv.config()
connectDB();
const seedData= async()=>{
  try {
      await User.deleteMany();
      await Product.deleteMany();
      const createuser=await User.insertMany(users)
      const adminUser=createuser[0]._id
      const UpdatedProduct=products.map((product) =>{
      return{
          user:adminUser,
          ...product,
      }
    }
      )
      
      await Product.insertMany(UpdatedProduct)
      console.log(`Database Seeded`.inverse.green);
      process.exit();
  } catch (error) {
    console.log(`Error while seeding database ${error.message}`.inverse.red);
    process.exit(1);
  }
}

const DeleteData= async() =>{
    try{
    await User.deleteMany();
    await Product.deleteMany();
    console.log(`Database Deleted`.inverse.green);
    process.exit();
    }
    catch(error){
        console.log(`Error while seeding database ${error.message}`.inverse.red);
        process.exit(1);
    }
}
if(process.argv[2]==='-d')
{
    DeleteData();
}
else{
    seedData();
}