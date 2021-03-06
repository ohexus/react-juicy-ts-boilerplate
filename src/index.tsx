import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './modules/App';

import './index.scss';

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
