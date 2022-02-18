const express = require('express');
const dotenv  = require("dotenv").config();
const app = express();
const {errorHandler} = require('./middlewares/errorMiddleware')

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use("/api/goals",require('./routes/goalsRoutes'))

app.use(errorHandler)



const PORT =  process.env.PORT || 5000
app.listen(PORT,()=>console.log(`app is running at port ${PORT}`))