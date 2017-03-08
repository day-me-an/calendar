import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {Grid} from './Grid'

storiesOf('Grid', module)
  .add('no overflow', () => (
    <Grid days={28} overflowStart={[]} overflowEnd={[]} />
  ))