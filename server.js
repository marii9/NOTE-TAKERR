const express = require('express');
const path = require('path')
const {clog} = require('./middleware/clog')
const api = require('./routes/index')

const app = express();
const port = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', api);
app.use(clog);
// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the routes defined in the index.js and notes.js files



// Serve the index.html file as the default page
app.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '/public/index.html')));

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html')));
    
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});