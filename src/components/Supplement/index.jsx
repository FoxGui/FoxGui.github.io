import * as React from 'react';

export default class Supplement extends React.Component {
  render(){
    const {items} = this.props;
    return(
      <>
        <p>补充说明</p>
        {
          items.map((item, index) => <div key={index + ''}>
            <p><strong>{item.label}</strong></p>
            <p>{item.desc}</p>
          </div>)
        }
        </>
    )
  }
}