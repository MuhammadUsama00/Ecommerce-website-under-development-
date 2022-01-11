import bcrypt from 'bcryptjs'
const user=[
    {
        name:'Usama',
        email:'usamasial00@gmail.com',
        password:bcrypt.hashSync('usama12345',10), 
        iAdmin:'true'
    },
    {
        name:'Zohaib',
        email:'zohaibsial00@gmail.com',
        password:bcrypt.hashSync('usama12345',10), 
 
    }
]
export default user;