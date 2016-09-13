import * as React from "react";
import * as ReactDOM from "react-dom";
var injectTapEventPlugin = require('react-tap-event-plugin');
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import {CardUi} from "./CardUi";

const App = () => (
  <MuiThemeProvider>
    <CardUi />
  </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById('content')
);