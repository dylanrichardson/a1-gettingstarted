const express = require('express');

// create the default server
const app = express();

// choose the port from the env or default
const PORT = process.env.PORT || 8080;

// serve the static index.html
app.use(express.static('public'));

// redirect any route not found in public to the root
app.use((_, res) => res.redirect('/'));

// start the server on the desired port
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
