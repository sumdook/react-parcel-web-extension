import React from 'react';

const App = () => {
  return (
    <button
      style={{
        position: 'fixed',
        bottom: 30,
        right: 30,
      }}
    >
      Injected by content script
    </button>
  );
};

export default App;
