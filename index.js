const express = require('express');
const { questionData, answers } = require('./questionsData');

const app = express();
app.use(express.json())

let port = process.env.PORT || 3000;

app.get('/questions', (req, res) => {
    res.send(questionData);
});

app.post('/check', (req, res) => {
    const userAnswers = req.body.answers;
    const result = {
        correct: 0,
        incorrect: 0
    };
    for(ans in userAnswers) {
        console.log("ans", ans, "val", userAnswers[ans])
        if(userAnswers[ans] === answers[ans]) {
            result.correct  += 1;
        } else {
            result.incorrect += 1;
        }
    }
    res.send(result);
});

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});