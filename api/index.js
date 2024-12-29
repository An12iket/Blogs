const express = require("express")
const app = express()
const cors = require('cors')
const User = require('./models/User');
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.post('/register', async (req, res) => {
    const {username, password} = req.body;
    try{
        const userDoc =  await User.create({username,password})
        res.json(userDoc)
    } catch(err){
        res.status(400).json(err)
    }
})


app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
})