import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {YearPicker} from './Calendar'

storiesOf('YearPicker', module)
  .add('without initial value', () => (
    <YearPicker onChange={action('set year')} />
  ))
  .add('with initial value', () => (
    <YearPicker current={2000} onChange={action('set year')} />
  ))