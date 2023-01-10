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
  res.render("flights/index", {
    title:"Add Flight"
  })
}

export{
  newFlight as new, 
  index, 
  create
}