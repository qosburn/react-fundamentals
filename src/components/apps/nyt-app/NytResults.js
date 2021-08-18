import React from 'react';
const NytResults = (props) => {
  return (
    <div>
      {props.results.map((results) => {
        return (
          <div key={results._id}>
            <h3>{results.headline.main}</h3>
            {results.multimedia.length > 1 ? (
              <image
                alt="article"
                src={`http://www.nytimes.com/${results.multimedia[1].url}`}
              />
            ) : (
              ''
            )}
            <p>
              {results.snippet}
              <br />
              {results.keywords.length > 0 ? ' Keywords: ' : ''}
            </p>
            <ul>
              {results.keywords.map((keyword) => (
                <li key={keyword.value}>{keyword.value}</li>
              ))}
            </ul>
            <a href={results.web_url}>
              <button>Read It</button>
            </a>
          </div>
        );
      })}
      <div>
        <button onClick={(e) => props.changePage(e, 'down')}>
          Previous 10
        </button>
        <button onClick={(e) => props.changePage(e, 'up')}>Next 10</button>
      </div>
    </div>
  );
};

export default NytResults;
