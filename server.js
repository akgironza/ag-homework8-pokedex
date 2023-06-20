// IMPORT DEPENDENCIES & SETUP
require("dotenv").config() //loads variables in .env file into process.env object
const express = require("express") //import express lib
const morgan = require("morgan") //import morgan lib
const PORT = process.env.PORT //get port from .env file
const app = express() //express appliation object

// NEEDS TO BE CHANGED FOR POKEMON
//const fruits = require("../models/fruits.js") // import fruits data

// MIDDLEWARE
app.use(morgan("dev"))
// app.use(express.static("public")) -- consider using
// app.use(express.urlencoded({extended: false})) -- might need later


// ROUTES


// LISTENER
app.listen(PORT, () => {
    console.log(`heard you on port ${PORT}`)
})