const path = require('path');
const express = require('express');
const app = express();
const port = 9876;

// Middleware to parse JSON bodies
app.use(express.json());


// Set the public directory to serve static files like CSS
app.use(express.static(path.join(__dirname, 'public')));

// Set the views directory for EJS templates
app.set('view engine', 'ejs');

// Sample route
app.get('/', (req, res) => {
  res.render('index');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

