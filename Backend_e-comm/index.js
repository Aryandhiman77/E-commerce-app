const express = require('express')
const app = express();
const userRouter = require('./routes/user.routes')
const cors = require('cors')
require('./config/dbConn')
app.use(cors({
    origin:"http://localhost:5173"
}))
app.use('/api/v1',userRouter)

app.listen(8000);