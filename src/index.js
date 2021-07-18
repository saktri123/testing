import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Root from 'Root';

import App from './components/App';

ReactDom.render(
    <Root>
        <BrowserRouter>
            <Route path="/" component={App}></Route>
        </BrowserRouter>
    </Root>,
    document.querySelector("#root")
);