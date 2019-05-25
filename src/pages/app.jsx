import * as React from 'react';
import Helmet from 'react-helmet';
import {Router} from 'react-router-dom';

import Body from '@pages/main'
import hashHistory from "@utils/router";

class App extends React.Component {
  render() {
    return (
      <>
        <Helmet>
          <link rel="icon" href={'../assets/icons/favicon'} type="image/x-icon"/>
          <title>{"FoxGui的blog"}</title>
        </Helmet>

        <Router history={hashHistory}>
          <Body/>
        </Router>
      </>
    )
  }
}

export default App;