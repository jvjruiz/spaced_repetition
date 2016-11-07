import 'babel-polyfill';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

import React from 'react';
import Reactdom from 'react-dom';

Reactdom.render(<div>App</div>, document.getElementById("app"));