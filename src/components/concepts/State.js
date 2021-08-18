import React, { useState } from 'react';

const State = () => {
  return (
    <div className="main">
      <div className="mainDiv">
        <ul>
          <dt>useState is Unique to Functional Components</dt>
          <dd>
            Class components have a separate means of using and changing state.
          </dd>
          <dt>useState Use Array Destruturing</dt>
          <dd>useState prove a state variable and a setState function</dd>
          <dt>useState is a Hook</dt>
          <dd>useState is a hook backed into react</dd>
          <dt>Triggers Re-renders</dt>
          <dd>
            Like with props changes, changing the state of a component
            re-renders the whole component.
          </dd>
        </ul>
        <StateExample />
      </div>
    </div>
  );
};

function StateExample() {
  const [text, setText] = useState('');
  const [likeNum, setLikeNum] = useState(0);
  const [textColor, setTextColor] = useState('blue');
  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <img
        style={{ width: '100px', height: '100px' }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Bot%C3%B3n_Me_gusta.svg/300px-Bot%C3%B3n_Me_gusta.svg.png"
        onClick={(e) => setLikeNum(likeNum + 1)}
      />
      <span>{likeNum}</span>
      <br />
      <br />
      <p
        style={{ color: textColor }}
        onMouseEnter={(e) => setTextColor('red')}
        onMouseLeave={(e) => setTextColor('blue')}
      >
        This text should be able to change color.
      </p>
    </div>
  );
}
export default State;
