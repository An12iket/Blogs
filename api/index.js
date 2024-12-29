const express = require("express")
const app = express()
const cors = require('cors')
const PORT = 3000 || process.env.PORT;

app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
    const { username, password } = req.body;
    res.json({requestData:{username, password}})
})


app.listen(PORT, () => {
    console.log(`Server Listening on PORT ${PORT}`);
})