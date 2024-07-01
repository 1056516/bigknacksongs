// server.js
const express = require('express');
const app = express();
const port = 3000; // Choose any available port

// Serve static files from the 'public' folder
app.use(express.static(__dirname + '/public'));

// Route for the homepage
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
