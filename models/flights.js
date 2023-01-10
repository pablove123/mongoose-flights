import mongoose from 'mongoose'


const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    enum: ["American", "Southwest", "United"]},
  airport:{ 
    type: String, 
    enum: ["AUS", "DFW", "DEN", "LAX", "SAN"],
    default: "DEN"},
  flightNo: Number, 
  departs: {
    type:Date,
    min: 10,
    max: 9999}
})

const Flight = mongoose.model('Flight', flightSchema)

export{
  Flight
}