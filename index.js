import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'

const app = express()
// dans .env toute données sensibles
const port = process.env.PORT || 3002

app.use(bodyParser.urlencoded ({
    extended : true
}))
app.use(express.json())
app.use(express.urlencoded({
    axtended : true
}))

const mongoDB = 'mongodb+srv://kalil:Pq2lS8fy7fPFW6ql@intro-express-mongo.fqrp3vc.mongodb.net/?retryWrites=true&w=majority&appName=intro-express-mongo'
mongoose.connect(mongoDB, {useNewUrlParser: true});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"))

app.get('/', (req, res) => {
    res.send('Welcome to our API using mongo and express')
})

app.listen(port, () => console.log(`server is running on port ${port}`))