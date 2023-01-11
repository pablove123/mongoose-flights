import { Flight } from "../models/flights.js"


function newFlight(req,res){
  res.render("flights/new", {
    title:"Add Flight"
  })
}

function create(req,res){
  Flight.create(req.body)
  .then(flight => {
    res.redirect("/flights")
  })
  .catch(err => {
    console.log(err)
    console.log("error")
    res.redirect('/flights')
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

function edit(req,res){
  Flight.findById(req.params.id)
  .then(flight =>{
    res.render("flights/edit", {
      flight:flight, 
      title: "Edit Flight"
    })
  })
}

function update(req,res){
  for (let key in req.body) {
	  if (req.body[key] === '') delete req.body[key]
	}
  Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
}

function createTicket(req,res){
  Flight.findById(req.params.id)
  .then(flight =>{
    flight.tickets.push(req.body)
    flight.save()
    .then(()=>{
      res.redirect(`/flights/${movie._id}`)
    })
    .catch(err => {
      console.log(err)
      console.log("error")
      res.redirect('/flights')
    })
  })
  .catch(err => {
    console.log(err)
    console.log("error")
    res.redirect('/flights')
  })
}

export{
  newFlight as new, 
  index, 
  create, 
  deleteFlight as delete, 
  show, 
  edit, 
  update, 
  createTicket
}