import { useState, useEffect } from 'react';
import CheckboxGroup from 'react-checkbox-group';
const Question = ({ ques, setAnswers, ans }) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    setSelected(ans);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ques]);

  useEffect(() => {
    if (selected.length) {
      setAnswers((answers) => {
        const idx = answers.findIndex((el) => el.qid === ques.qid);
        const ob = { qid: ques.qid, value: selected[0] };
        if (idx === -1) return [...answers, ob];
        let newAnswers = [...answers];
        newAnswers[idx] = ob;
        return newAnswers;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  const handleChange = (opt) => {
    setSelected([opt[opt.length - 1]]);
  };

  return (
    <div className="question">
      <h4>
        Question {ques.qid}: {ques.ques}
      </h4>
      <CheckboxGroup name="answers" value={selected} onChange={handleChange}>
        {(Checkbox) => (
          <>
            {ques.options.map((option) => (
              <div key={option} className="option-item">
                <Checkbox value={option} /> {option.toUpperCase()}
              </div>
            ))}
          </>
        )}
      </CheckboxGroup>
    </div>
  );
};

export default Question;
