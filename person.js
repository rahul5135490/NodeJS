const express = require('express');
const mongoose = require('mongoose');
const app = express();

// =====================
// 🧭 1. Middleware
// =====================
app.use(express.json());

// =====================
// 🧭 2. MongoDB Connection
// =====================
mongoose.connect('mongodb://127.0.0.1:27017/rahul')
  .then(() => console.log('✅ MongoDB connected successfully'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// =====================
// 👤 3. Schema & Model
// =====================
const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    min: 0,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  work: {
    type: String,
    enum: ['chef', 'manager', 'waiter', 'cleaner', 'receptionist'],
  }
});

const Person = mongoose.model('Person', personSchema);

// =====================
// 🚀 4. Routes
// =====================

// ✅ Home Route
app.get('/', (req, res) => {
  res.send('Hello from Express.js server 🚀');
});

// ✅ Create Person (POST) — Single & Multiple दोनों को सपोर्ट करेगा
app.post('/person', async (req, res) => {
  try {
    let result;
    if (Array.isArray(req.body)) {
      result = await Person.insertMany(req.body);
    } else {
      const person = new Person(req.body);
      result = await person.save();
    }
    res.status(201).send(result);
  } catch (err) {
    console.error('❌ Error inserting person(s):', err);
    res.status(400).send(err);
  }
});

// ✅ Get All Persons (GET)
app.get('/person', async (req, res) => {
  try {
    const persons = await Person.find();
    res.status(200).send(persons);
  } catch (err) {
    console.error('❌ Error fetching persons:', err);
    res.status(500).send(err);
  }
});

// ✅ Get Single Person by ID (GET)
app.get('/person/:id', async (req, res) => {
  try {
    const person = await Person.findById(req.params.id);
    if (!person) {
      return res.status(404).send({ message: 'Person not found' });
    }
    res.status(200).send(person);
  } catch (err) {
    console.error('❌ Error fetching person:', err);
    res.status(500).send(err);
  }
});

// ✅ Update Person by ID (PUT)
app.put('/person/:id', async (req, res) => {
  try {
    const updatedPerson = await Person.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true } // new:true => updated data return करेगा
    );
    if (!updatedPerson) {
      return res.status(404).send({ message: 'Person not found' });
    }
    res.status(200).send(updatedPerson);
  } catch (err) {
    console.error('❌ Error updating person:', err);
    res.status(400).send(err);
  }
});

// ✅ Delete Person by ID (DELETE)
app.delete('/person/:id', async (req, res) => {
  try {
    const deletedPerson = await Person.findByIdAndDelete(req.params.id);
    if (!deletedPerson) {
      return res.status(404).send({ message: 'Person not found' });
    }
    res.status(200).send({ message: '✅ Person deleted successfully', deletedPerson });
  } catch (err) {
    console.error('❌ Error deleting person:', err);
    res.status(500).send(err);
  }
});

// =====================
// 🟢 5. Start Server
// =====================
app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});
