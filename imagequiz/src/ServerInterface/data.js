let q1 = {picture: "cherryblossom.png", title: "Which word matches this picture?",
choices: ["pickle", "cucumber", "cherry blossom", "chicken"], correct: "cherry blossom"};
let q2 = {picture: "daisy.jpg", title: "Which word matches this picture?",
choices: ["pickle", "daisy", "cherry blossom", "eyeball"], correct: "daisy"};
let q3 = {picture: "daffodil.png", title: "Which word matches this picture?",
choices: ["pickle", "daffodil", "cherry blossom", "Cthulhu"], correct: "daffodil"};
let q4 = {picture: "lily.jpg", title: "Which word matches this picture?",
choices: ["pickle", "lily", "cherry blossom", "ghost"], correct: "lily"};
let q5 = {picture: "sunflower.png", title: "Which word matches this picture?",
choices: ["pickle", "sunflower", "cherry blossom", "bagel"], correct: "sunflower"};
let q6 = {picture: "rose.png", title: "Which word matches this picture?",
choices: ["pickle", "rose", "cherry blossom", "spooky scary skeleton"], correct: "rose"};
let Quiz1 = {id: 1, title: "quiz 1", picture: "cherryblossom.png", 
questions: [q1, q2, q3, q4, q5, q6]};
let Quiz2 = {id: 2, title: "quiz 2", picture: "daisy.jpg", 
questions: [q2, q1, q4, q3, q6, q5]};
let Quiz3 = {id: 3, title: "quiz 3", picture: "lily.jpg", 
questions: [q2, q3, q4, q5, q6, q1]};
let quizzes = [Quiz1, Quiz2, Quiz3];
export default quizzes;