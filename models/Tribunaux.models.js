const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
    lieu: String,
    lundi_a: String,
    mardi_a: String,
    mercredi_a: String,
    jeudi_a: String,
    vendredi_a: String,
    samedi_a: String
})


const TribunalSchema = new Schema({
    Tribunal: String,
    Service: [ServiceSchema]

})





module.exports = mongoose.model('Tribunaux', TribunalSchema)