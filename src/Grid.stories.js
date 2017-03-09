import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {Grid} from './Grid'

storiesOf('Grid', module)
  .add('no overflow', () => (
    <Grid year={2021} month={1/*February*/} />
  ))
  .add('start overflow', () => (
    <Grid year={2017} month={3/*April*/} />
  ))
  .add('end overflow', () => (
    <Grid year={2017} month={4/*May*/} />
  ))
  .add('both overflow', () => (
    <Grid year={2017} month={2/*March*/} />
  ))