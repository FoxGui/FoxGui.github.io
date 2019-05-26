import * as React from 'react';

// const {lazy} = React;
// const Position = lazy(() => import('../css-container/position'));

import Positioning from '../css-positioning/positioning';
import Position from '../css-positioning/position';
import Z_Index from '../css-positioning/z-index';
import Top from '../css-positioning/top';
import Right from '../css-positioning/right';
import Bottom from '../css-positioning/bottom';
import Left from '../css-positioning/left';
import Clip from '../css-positioning/clip';

import Layout from '../css-layout';
import Display from '../css-layout/display';
import Float from '../css-layout/float';
import Clear from '../css-layout/clear';
import Visibility from '../css-layout/visibility';
import Overflow from '../css-layout/overflow';

export const routeMap = {
  //positioning
  positioning: Positioning,
  position: Position,
  zIndex: Z_Index,
  top: Top,
  right: Right,
  bottom: Bottom,
  left: Left,
  clip: Clip,
  // Layout
  layout: Layout,
  display: Display,
  float: Float,
  clear: Clear,
  visibility: Visibility,
  overflow: Overflow,
};