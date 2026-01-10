function McqCard({ mcq, onSelect, selectedOption, result }) {
  return (
    <div className="mcq-card">
      <h3>{mcq.question}</h3>

      {mcq.codeSnippet && (
        <pre className="code-block">
          <code>{mcq.codeSnippet}</code>
        </pre>
      )}

      <div className="options">
        {mcq.options.map((opt, index) => {
          const optionNumber = index + 1;

          let className = "option-btn";
          if (selectedOption) {
            if (optionNumber === selectedOption && result === true) {
              className += " correct";
            }
            if (optionNumber === selectedOption && result === false) {
              className += " wrong";
            }
          }

          return (
            <button
              key={index}
              className={className}
              disabled={!!selectedOption}
              onClick={() => onSelect(optionNumber)}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default McqCard;
