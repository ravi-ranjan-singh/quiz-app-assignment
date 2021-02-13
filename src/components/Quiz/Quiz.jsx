import { useState } from 'react';
import swalWithReact from '@sweetalert/with-react';
import swal from 'sweetalert';
import Question from '../Question/question';
import TitleBar from '../TitleBar/titleBar';
import initialData from './../../initialData';
import SubmitPage from '../SubmitPage/submitPage';
import './quiz.css';

const Quiz = ({ setAnswers, answers }) => {
  const [page, setPage] = useState(1);

  const onSubmitAnswers = () => {
    let obtained = 0;
    answers.forEach((el) => {
      const idx = initialData.findIndex((ques) => ques.qid === el.qid);
      if (el.value === initialData[idx].correctAns) obtained++;
    });

    swal(
      'Submit Test!',
      'Are you sure you want to submit the test',
      'warning',
      {
        buttons: {
          cancel: 'Cancel',
          submit: 'Submit',
        },
      }
    ).then((value) => {
      switch (value) {
        case 'submit':
          swalWithReact(
            <SubmitPage data={{ total: initialData.length, obtained }} />
          ).then(() => (window.location = '/'));
          break;
        default:
          return;
      }
    });
  };
  const getAnsArray = () => {
    const idx = answers.findIndex((el) => el.qid === initialData[page - 1].qid);
    if (idx === -1) return [];
    return [answers[idx].value];
  };
  return (
    <div className="quiz">
      <TitleBar setPage={setPage} page={page} totalPages={initialData.length} />
      <div className="question">
        <Question
          ques={initialData[page - 1]}
          setAnswers={setAnswers}
          ans={getAnsArray()}
        />
      </div>
      <div className="submit">
        <button className="submit-btn" onClick={onSubmitAnswers}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
