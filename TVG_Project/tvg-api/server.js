const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Fake in-memory data
const products = [
  { id: 1, name: 'Matte Green Bottle · 500 ml', price: 10.9 },
  { id: 2, name: 'Matte Green Bottle · 750 ml', price: 14.9 },
];

const users = []; // simple in-memory users

// GET /products
app.get('/products', (req, res) => {
  res.json(products);
});

// POST /auth/register
app.post('/auth/register', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: 'Email & password required' });

  const exists = users.some((u) => u.email === email);
  if (exists)
    return res.status(400).json({ message: 'User already exists' });

  users.push({ email, password }); // never store plain password in real apps
  res.json({ message: 'User registered', email });
});

// POST /auth/login
app.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user)
    return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ message: 'Login successful', email });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});