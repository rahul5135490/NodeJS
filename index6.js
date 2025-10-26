const express = require('express');
const app = express();
const PORT = 3000;

// 👇 ye middleware POST body ko JSON me read karega
app.use(express.json());

// GET route
app.get('/user', (req, res) => {
  const userData = {
    name: 'Rahul',
    age: 25,
    city: 'Lucknow',
    skills: ['Node.js', 'Express', 'JavaScript']
  };
  res.json(userData);
});

// POST route
app.post('/user', (req, res) => {
  const newUser = req.body;  // 👈 ye Postman se bheja gaya JSON lega
  console.log('📥 Received data:', newUser);

  res.status(201).json({
    message: '✅ User created successfully',
    user: newUser
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
