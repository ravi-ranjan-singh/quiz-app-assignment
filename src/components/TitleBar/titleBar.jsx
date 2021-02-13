import './titlebar.css';
const TitleBar = ({ setPage, page, totalPages }) => {
  const onPageChange = (op) =>
    op === 'inc' ? setPage(page + 1) : setPage(page - 1);

  return (
    <div className="title-bar">
      <button
        onClick={() => onPageChange('dec')}
        style={page === 1 ? { visibility: 'hidden' } : null}
      >
        <i className="fas fa-arrow-circle-left"></i>
      </button>
      <h3>Attempt Questions Here</h3>
      <button
        onClick={() => onPageChange('inc')}
        style={page === totalPages ? { visibility: 'hidden' } : null}
      >
        <i className="fas fa-arrow-circle-right"></i>
      </button>
    </div>
  );
};

export default TitleBar;
