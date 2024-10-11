const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("Hello from Express!");
});

app.get('/freakoverflow1', (req, res) => {
    res.send("Today's freak level: 107%");
});

app.get('/freakoverflow2/:input', (req, res) => {
    const stuff = req.params.input
    res.send(stuff + " is a bitch");
});

app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});