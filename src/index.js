import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import Root from 'Root';

import App from './components/App';

ReactDom.render(
    <Root>
        <App/>
    </Root>,
    document.querySelector("#root")
);