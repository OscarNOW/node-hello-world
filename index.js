const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    return res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});