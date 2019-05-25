import * as React from 'react';
import hashHistory from "@utils/router";

export default class NotFound extends React.Component {
  render() {
    return(
      <div className="blog-body">
        <div style={{textAlign: 'center', paddingTop: '5%'}}>
          <h3>404 NOTFOUND</h3>
          <p>大侠，是非之地，还请
            <a onClick={() => hashHistory.replace({pathname: '/main/homepage'})}
              style={{cursor: 'pointer', color: '#66ccff'}}>速速离开</a>
          </p>
        </div>
      </div>
    )
  }
}