// IMPORT DEPENDENCIES & SETUP
require("dotenv").config() //loads variables in .env file into process.env object
const express = require("express") //import express lib
const morgan = require("morgan") //import morgan lib
const PORT = process.env.PORT //get port from .env file
const app = express() //express appliation object
const methodOverride = require("method-override") // import middleware for overriding for PUTS and DELETES
const pokemon = require("./models/pokemon.js") // import pokemon data

// MIDDLEWARE
app.use(morgan("dev"))
app.use(express.static("public"))
app.use(methodOverride("_method")) // method will be overriden when it sees a query string like ?_method="put"
// app.use(express.urlencoded({extended: false})) -- might need later


// ROUTES
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemon})
})


// LISTENER
app.listen(PORT, () => {
    console.log(`heard you on port ${PORT}`)
})