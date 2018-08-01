import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import 'normalize.css';
import './fixes.css';
import './utils.css';
import './theme.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
