let API = "http://localhost:3001";
let getQuizzes = () => {
    return(fetch (API + "/quizzes").then(x => x.json()));
}
let getQuiz = (i) => {
    return(fetch(API + `/quiz/${i}`).then(x => x.json()));
}
let saveScore = (username, id, score) => {
    let data = {username: username, quizid: id, score: score};
    return(fetch(API + '/score', 
    {method: "POST", headers: {"CONTENT-TYPE": "application/json"}, body: JSON.stringify(data)})
    .then(x => x.json()));
}
let server = {getQuizzes: getQuizzes, getQuiz: getQuiz, saveScore: saveScore};
export default server;