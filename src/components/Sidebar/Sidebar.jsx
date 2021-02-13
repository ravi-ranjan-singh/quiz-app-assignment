import './sidebar.css';

const SideBar = ({ answers }) => {
  return (
    <div className="sidebar">
      <h3>Review Answers Here</h3>
      <ul>
        {answers.map((ans) => (
          <li key={ans.qid}>
            Ques {ans.qid}. {ans.value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
