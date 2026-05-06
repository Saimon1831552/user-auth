require('dotenv').config();
const express = require('express');
const router = require('./routes/routesAuth');
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.use('/api', router);



const port = 4000;
app.listen(port,()=>{
    console.log(`server running on ${port}`);
})