import express from 'express';
import {config} from 'dotenv';
import cors from 'cors';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import UsersRouter from './routes/user.js'
import ProductsRouter from './routes/products.js'
config()

const PORT = process.env.PORT
const app = express()




app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.static('static'))
app.use('/users',UsersRouter)
app.use('/products',ProductsRouter)

// app.post('/users', (req, res)=>{
//     const {username, password }= req.body;
//     bcrypt.hash(password, 10, async (err, hash) => {
//         if(err) throw err
//     await addUser(username, hash)
//         res.send({
//             msg: "You have created an account"
//         })
//     })
// })

app.listen(PORT, ()=>{
    console.log('Server is running on http://localhost:' + PORT);
})