const mongoose=require('mongoose');
//Define the person schemas
const personSchema=new mongoose.Schema({
    name: { type: String, 
        required: true },
    age: 
    { type: Number, required: true },
    work: 
    { type: String, 
        required: true },
    mobile:
     { type: String,
         required: true },
    email: 
    { type: String, 
        required: true },
    address:

     { type: String,
         required: true },
    salary:
     { type: Number, 
        required: true },

})
// Create the person model
const Person = mongoose.model('Person', personSchema);

module.exports = Person;