import { Flight } from "../models/flights.js"


function newFlight(req,res){
  res.render("flights/new", {
    title:"Add Flight"
  })
}

function create(req,res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect("/flights/new")
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function index(req,res){
  Flight.find({})
  .then(flights => {
    res.render("flights", {
      title:"Add Flight", 
      flights: flights
    })
  })
}

function deleteFlight(req,res){
  Flight.findByIdAndDelete(req.params.id)
  .then(movies =>{
    res.redirect("/flights")
  })
}

function show(req,res){
  Flight.findById(req.params.id)
  .then( flight => {
    res.render("flights/show", {
    title: "Flight Details", 
    flight: flight
  })
  })
}

export{
  newFlight as new, 
  index, 
  create, 
  deleteFlight as delete, 
  show
}