const express = require("express")
const app = express()
const cors = require('cors')
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secret = 'blog1234';
const PORT = 3000 || process.env.PORT;

const salt = bcrypt.genSaltSync(10);

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc =  await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        })
        res.json(userDoc)
    } catch(err){
        res.status(400).json(err)
    }
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
        const userDoc = await User.findOne({username})
        const passOk = bcrypt.compareSync(password, userDoc.password)
        if(passOk){
            // logged in
            jwt.sign({username, id: userDoc._id}, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id:userDoc._id,
                    username,
                });
            }) 
        } else {
            res.status(400).json({
                message: "Wrong credentials!"
            })
        }
})


app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
})