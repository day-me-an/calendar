import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {YearPicker, MonthPicker} from './Calendar'

storiesOf('YearPicker', module)
  .add('without initial value', () => (
    <YearPicker onChange={action('set year')} />
  ))
  .add('with initial value', () => (
    <YearPicker current={2000} onChange={action('set year')} />
  ))

storiesOf('MonthPicker', module)
  .add('without initial value', () => (
    <MonthPicker onChange={action('set month')} />
  ))
  .add('with initial value', () => (
    <MonthPicker current={2/*March*/} onChange={action('set month')} />
  ))