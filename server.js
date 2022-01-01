require('dotenv').config();

// Import packages
const express = require('express')
const mongoose = require('mongoose');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');

// Load Up ENV Vars
const {
    MONGODB_URI,
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_POSTPEND,
} = process.env
const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 1234;

// Import Models
const TodosModel = require('./models/Todo')

// Create App Instance 
const app = express();

// Connect to DB
const MONGODB_CONNECTION_STRING = `${MONGODB_URI}${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_POSTPEND}`
mongoose.connect(
    MONGODB_CONNECTION_STRING, {
    useNewUrlParser: true,
}
).then(() => console.log('MONGO DB Connected'))
    .catch((err) => console.log(err))


// Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static(path.resolve(__dirname, './client/build')))



//  Endpoitns
app.get('/api/todos', async (req, res) => {
    const todos = await TodosModel.find({})
    console.log('Getting all Todos')
    res.send({ todos })
})

app.get('/api', (req, res) => {
    res.json({ message: 'Success hit the server' })
})

app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Server running on http://${HOST}:${PORT}`)
})