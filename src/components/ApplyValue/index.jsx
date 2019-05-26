import * as React from 'react';

export default class ApplyValue extends React.Component {
  render(){
    const {items} = this.props;
    return(
      <>
        <p>取值</p>
        {
          items.map((item, index) => <p key={index + ''}><strong>{item.label}</strong>: <span>{item.desc}</span></p>)
        }
      </>
    )
  }
}