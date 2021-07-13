import React from 'react';
import ReactDOM from 'react-dom';
import Text from '../../components/text';

const App: React.FC = () => {
  return (
    <div style={{ minWidth: 300, minHeight: 500 }}>
      <Text>This is a test popup</Text>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
