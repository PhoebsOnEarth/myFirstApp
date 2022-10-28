// Import packages
const { response } = require('express');
const express = require('express');
const morgan = require('morgan');

// Configure out port
// Check if it is set in the environment variable, if not then we default to 3000
const port = process.env.port || 3000;

// Create an instance of express application
const app = express()

// log all request
app.use(morgan('common'))

//Start our web application
app.listen(port,()=>{
    console.info(`Starting application on port ${port} at ${new Date()}`)
})
// GET/
app.get('/',(req,response)=>{
    // what is the media type
    response.type('text/html')

    //set the status code
    response.status(200)

    // send the responses
    response.send(`<h1>The current time is ${new Date()}</h1> now`)
})

console.info(`port = ${port}`)

