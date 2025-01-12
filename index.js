require('dotenv').config()

//importing the express package
const express = require('express')

//declaring the app object from express
const app = express()

//declaring the port number use 3000 only
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


//after comma there is a callback function and req and res  are the parameters
// if the server gets the /kanishk it sends a response hello kanishk
//get has two parameters one is a route and second is a callback function

app.get('/kanishk', (req,res) => {
    res.send("Hello K")
    console.log("hello kanishk")
})

//once a req or response is made we need a listner that listens to the res on that port
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
