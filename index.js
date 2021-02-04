const express = require('express');
const app = express();

let port = process.env.PORT || 3000;

app.get('/questions', (req, res) => {
    res.send({
        "name": "Juned khan",
    });
})

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});