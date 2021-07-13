import React from 'react';
import ReactDOM from 'react-dom';

import App from '../pages/Content';

const newDiv = document.createElement('div');
newDiv.setAttribute('id', 'content-app-root');
document.body.appendChild(newDiv);
ReactDOM.render(<App />, newDiv);
