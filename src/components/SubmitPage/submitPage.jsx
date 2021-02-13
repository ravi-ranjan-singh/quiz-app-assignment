const SubmitPage = ({ data }) => {
  return (
    <div>
      <h1>You have successfully submit the Assessment</h1>
      <p>Question Asked : {data.total}</p>
      <p>Question Correct: {data.obtained}</p>
      <p>Your Score: {Math.floor((data.obtained / data.total) * 100)}</p>
    </div>
  );
};

export default SubmitPage;
