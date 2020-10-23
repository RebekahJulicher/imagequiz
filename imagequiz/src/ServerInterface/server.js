import quizzes from "./data";
let server = {getQuizzes: () => {return quizzes;}, 
getQuiz: (i) => {return quizzes.find(x => x.id===i);}};
export default server;