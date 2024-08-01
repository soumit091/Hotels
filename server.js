const express = require('express')
const app = express();
const db=require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const person=require('./models/person');



app.get('/', function (req, res) {
  res.send('Welcome to my app how can i help you')
})
// app.get('/chiken',(req,res)=>{
// res.send('yes Sure I Am going to serve chicken');
// })
app.post('/person', async (req, res) => {
  try {
  const newPersonData = req.body;
  const newPerson = new person(newPersonData);
  // Save the new person to the database using await
  const savedPerson = await newPerson.save();
  console.log('Saved person to database');
  res.status(201).json(savedPerson);
  } catch (error) {
  console.error('Error saving person:', error);
  res.status(500).json({ error: 'Internal server error' });
  }
  });
  

app.listen(3000)