require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const path = require('path')
const port = process.env.PORT || 4000;

const app = express()

// app.use(cors({
//   origin: 'http://localhost:5173' // Reemplaza con el origen de tu aplicación React
// }));

//midlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.use(require('./routes/index'));

//static contents default
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('../front/dist'));


app.listen(port)

console.log(`Server Listening in port...${port}`);