import React, { Component } from 'react';

interface BasicCanvasProps {

}

interface BasicCanvasState {

}

class BasicCanvas extends Component<BasicCanvasProps, BasicCanvasState> {
  private basicCanvas: any = null;
  constructor(props: BasicCanvasProps) {
    super(props);
  }
  componentDidMount(): void {
    this.basicCanvas = document.getElementById('basic-canvas-00000')
  }

  render(): React.ReactNode {
    return (
      <>

        <canvas id={'basic-canvas-00000'}/>
      </>
    )
  }
}

export default BasicCanvas
