const questionData = [{
    "id": 1,
    "label": "what is capital of India?",
    "options": ['Kolkata', 'Banglore', 'Delhi', 'Gujrat'],
    "type": "radio"
  },
  {
    "id": 2,
    "label": "Which of the following is not JavaScript Data Types?",
    "options": ['Undefined', 'Number', 'Boolean', 'Float'],
    "type": "radio"
  },
  {
    "id": 3,
    "label": "Which company developed JavaScript?",
    "options": ['Netscape', 'Bell Labs', 'Sun Microsystems', 'IBM'],
    "type": "radio"
  },
  {
    "id": 4,
    "label": "What is the original name of JavaScript?",
    "options": ['LiveScript', 'EScript', 'Mocha', 'JavaScript'],
    "type": "radio"
  },
  {
    "id": 5,
    "label": "Among the keywords below, which one is not a statement?",
    "options": ['if', 'with', 'debugger', 'use strict'],
    "type": "radio"
  },
  {
    "id": 6,
    "label": "text Question",
    "type": "text"
  },
  {
    "id": 7,
    "label": "text-area Question",
    "type": "textarea"
  },
  {
    "id": 8,
    "label": "select Question",
    "options": ['if', 'with', 'debugger', 'use strict'],
    "type": "select"
  },
  {
    "id": 9,
    "label": "checkbox Question",
    "options": ['if', 'with', 'debugger', 'use strict'],
    "type": "checkbox"
  }
];

const answers = {
    "1": "Delhi",
    "2": "Float",
    "3": "Netscape",
    "4": "Mocha",
    "5": "use strict",
}

module.exports = {
    questionData,
    answers,
}