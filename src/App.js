import { useState } from 'react';
import Quiz from './components/Quiz/Quiz';
import SideBar from './components/Sidebar/Sidebar';

function App() {
  const [answers, setAnswers] = useState([]);
  return (
    <div className="App">
      <SideBar answers={answers.sort((a, b) => a.qid - b.qid)} />
      <Quiz setAnswers={setAnswers} answers={answers} />
    </div>
  );
}

export default App;
