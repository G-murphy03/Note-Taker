// Importing dependencies
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;

// Create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));

// Middle wear to handle data parsing 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes to route files
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Starts the server
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} 🚀`)
});