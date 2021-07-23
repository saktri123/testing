import React from 'react';
import { Provider } from 'react-redux';
import reduxPomise from 'redux-promise';
import async from 'middlewares/async';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import stateValidator from 'middlewares/stateValidator';


export default ({children,initialState = {}})=>{
    const store = createStore(reducers, initialState, applyMiddleware(async,stateValidator));
    return (<Provider store={store}>
        {children}
    </Provider>
    );
};
