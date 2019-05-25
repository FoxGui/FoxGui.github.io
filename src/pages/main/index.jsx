import * as React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';

import './index.less'

import Footer from "@components/Layout/Footer";
import Loading from "@components/Loading";
import Header from "@components/Layout/Header";

import RouteMap from 'routes';

const {lazy} = React;
const Homepage = lazy(() => import('./homepage'));
const NotFound = lazy(() => import('./404'));

export default class FoxGui extends React.Component {
  render() {
    let menus = ['/main/homepage', '/main/html', '/main/css', '/main/javascript'];

    let routes = [];

    menus.map((route, index) => {
      const L1 = RouteMap[route];

      routes.push(
        <Route
          exact
          key={index}
          path={route}
          render={(props) => <L1 {...props}/>}
        />
      );
    });

    return(
      <>
        <Header/>
        <div className="body-container">
          <div className="body-container-left">
            <React.Suspense fallback={<Loading size="large" style={{minHeight: 'calc(100vh - 240px)'}}/>}>
                <Switch>
                  <Route
                    exact
                    path="/notfound"
                    render={(props) => <NotFound {...props}/>}
                  />
                  <Route
                    exact
                    path="/main/homepage"
                    render={(props) => <Homepage {...props}/>}
                  />
                  {routes.map((r) => r)}
                  <Redirect to="/notfound"/>
              </Switch>
            </React.Suspense>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}