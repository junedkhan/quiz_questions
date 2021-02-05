const express = require('express');
const { questionData, answers } = require('./questionsData');
const cors = require('cors');

const app = express();
app.use(express.json())

// Allowing everyone for this app
app.use(cors({origin: '*'}));

let port = process.env.PORT || 3000;

app.get('/questions', (req, res) => {
    res.send(questionData);
});

app.post('/check', (req, res) => {
    const userAnswers = req.body.answers;
    const result = {
        correct: 0,
        incorrect: 0,
        errors: {}
    };

    // Making response with data errors, and correct, incorrect fields
    for(ans in userAnswers) {
        if(userAnswers[ans] === answers[ans]) {
            result.correct  += 1;
            result.errors[ans] = false;
        } else {
            result.incorrect += 1;
            result.errors[ans] = true;
        }
    }

    res.send(result);
});

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});