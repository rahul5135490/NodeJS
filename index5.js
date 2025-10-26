// express ko import karo
const express = require('express');

// app ka instance banao
const app = express();

// port define karo
const PORT = 3000;

app.use(express.json());

// default route
app.get('/', (req, res) => {
  res.send('🚀 Express server is running!');
});

// ek aur route example
app.get('/hello', (req, res) => {
  res.send('Hello from Express 👋');
});

// ek aur route example
app.get('/chicken', (req, res) => {
  res.send('Hello from Express 👋 I will serve you chicken butter masala');
});
app.get('/user', (req, res) => {
  const userData = {
    name: 'Rahul',
    age: 25,
    city: 'Lucknow',
    skills: ['Node.js', 'Express', 'JavaScript']
  };

app.post('/user', (req, res) => {
  // User data ko create karne ka logic yahan hoga
  res.status(201).json({ message: 'User created successfully', user: userData });
});

  // JSON object ko response me bhej rahe hain
  res.json(userData);
});

// server ko start karo
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
