import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {Grid} from './Grid'

storiesOf('Grid', module)
  .add('no overflow', () => (
    <Grid days={28} overflowStart={[]} overflowEnd={[]} />
  ))
  .add('start overflow', () => (
    <Grid days={30} overflowStart={[27, 28, 29, 30, 31]} overflowEnd={[]} />
  ))
  .add('end overflow', () => (
    <Grid days={31} overflowStart={[]} overflowEnd={[1, 2, 3, 4]} />
  ))
  .add('both overflow', () => (
    <Grid days={31} overflowStart={[27, 28]} overflowEnd={[1, 2]} />
  ))