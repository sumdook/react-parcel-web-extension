import React from 'react';

const App: React.FC = () => {
  return (
    <button
      style={{
        position: 'absolute',
        bottom: 30,
        right: 30,
      }}
    >
      Injected by content script
    </button>
  );
};

export default App;
