import quizzes from "./data";
let server = {getquizzes: () => {return quizzes;}, 
getquestions: (i) => {return quizzes[i];}};
export default server;