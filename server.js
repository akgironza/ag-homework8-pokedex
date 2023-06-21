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
app.get("/pokemon/new", (req, res) => {
    res.render("new.ejs")
})


// DESTROY - DELETE - delete a pokemon
app.delete("/:id", (req, res) => {
    const id = req.params.id
    // splice the object out of the array
    pokemon.splice(id, 1)
    // redirect user back to index page
    res.redirect("/pokemon")
})


// UPDATE - PUT - update a pokemon
app.put("/:id", (req, res) => {
    const id = req.params.id
    pokemons[id] = req.body
    res.redirect("/pokemon")
})

// CREATE - POST - create a pokemon
app.post("/pokemon", (req, res) => {
    pokemon.push(req.body)
    res.redirect("/pokemon")
})

// EDIT - GET - render form to update a pokemon
app.get("/pokemon/:id/edit", (req, res) => {
    const id = req.params.id
    const pokemon = pokemons[id]
    res.render("edit.ejs", {pokemon, id})
})


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