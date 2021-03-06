import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {createStore} from 'redux';

import {widgetReducer} from './reducers/WidgetReducer'
import {App} from "./containers/widgetList";

const widgetStore = createStore(widgetReducer);

ReactDOM.render(
    <Provider store={widgetStore}>
         <App/>
    </Provider>,
    document.getElementById('root')
)