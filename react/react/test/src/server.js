import React from 'react';
import App from './App';
import {renderToString} from 'react-dom/server';


var html=renderToString(<App />);
console.log(html);

