const express = require('express');
const app = express();
const port = 3000;
const { logs } = require("../loggingMiddleware/server.js");
app.use(express.json());
const shortUrls = {};
app.post('/shorturls', (req, res) => {
    const { url, validity, shortcode } = req.body;
    const expiry = new Date(Date.now() + validity *30);
    shortUrls[shortcode] = { url, expiry };
    res.status(201).json({ shortlink: `http://localhost:${port}/shorturl/${shortcode}`, expiry });
});
app.get('/shorturl/:id', (req, res) => {
    const { id } = req.params;
    res.send({shortUrls});
});
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
