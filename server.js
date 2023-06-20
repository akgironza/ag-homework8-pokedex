// IMPORT DEPENDENCIES & SETUP
require("dotenv").config() //loads variables in .env file into process.env object
const express = require("express") //import express lib
const morgan = require("morgan") //import morgan lib
const PORT = process.env.PORT //get port from .env file
const app = express() //express appliation object
const methodOverride = require("method-override") // import middleware for overriding for PUTS and DELETES
const pokemons = require("./models/pokemon.js") // import pokemon data

// MIDDLEWARE
app.use(morgan("dev"))
app.use(express.static("public"))
app.use(methodOverride("_method")) // method will be overriden when it sees a query string like ?_method="put"
// app.use(express.urlencoded({extended: false})) -- might need later


// ROUTES ROUTES ROUTES ROUTES ROUTES

// INDEX - GET - show all pokemon
app.get("/pokemon", (req, res) => {
    res.render("index.ejs", {pokemons})
})

// NEW - GET - show form to create new pokemon


// DESTROY - DELETE - delete a pokemon

// UPDATE - PUT - update a pokemon

// CREATE - POST - create a pokemon

// EDIT - GET - render form to update a pokemon

// SHOW - GET - shows one pokemon
app.get("/pokemon/:id", (req, res) => {
    const id = req.params.id
    const pokemon = pokemons[id]
    res.render("show.ejs", {pokemon, id})
})


// LISTENER
app.listen(PORT, () => {
    console.log(`heard you on port ${PORT}`)
})