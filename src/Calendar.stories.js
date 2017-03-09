import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {YearPicker, MonthPicker, Calendar} from './Calendar'

/**
 * A stateful component to wrap the stateless Calendar for displaying in Storybook.
 */
class CalendarTestBed extends React.Component {
  constructor(props) {
    super(props)
    this.state = {year: props.year, month: props.month}
  }

  render() {
    return <Calendar
      year={this.state.year}
      month={this.state.month}
      onChange={(year, month) => {this.setState({year, month})}}
    />
  }
}

storiesOf('Calendar', module)
  .add('with initial date (January 2000)', () => (
    <CalendarTestBed year={2000} month={0/*January*/} />
  ))
  .add('no initial date (defaults to current)', () => (
    <CalendarTestBed />
  ))

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