import * as React from 'react';

import Body from './main'
import Footer from '@components/Layout/Footer'

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          这是一个起点
        </header>
        <Body/>
        <Footer/>
      </>
    )
  }
}

export default App;