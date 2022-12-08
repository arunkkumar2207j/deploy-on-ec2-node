const express = require('express');

const app = express();
const port = 4545;

app.get('/', (req, res) => {
    res.status(200).send('Hello Programmer')
})

app.listen(port, () => {console.log(`Server listening to port ${port}`);})