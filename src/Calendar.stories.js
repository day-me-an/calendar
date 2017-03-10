import React from 'react'
import {storiesOf, action, linkTo} from '@kadira/storybook'
import {YearPicker, MonthPicker, Calendar, NextArrow, PrevArrow, MINIMUM_YEAR} from './Calendar'

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
  .add('with year within range', () => (
    <YearPicker current={2000} onChange={action('set year')} />
  ))
  .add('with future year', () => (
    <YearPicker current={(new Date()).getFullYear() + 10} onChange={action('set year')} />
  ))
  .add(`with year before minimum of ${MINIMUM_YEAR}`, () => (
    <YearPicker current={MINIMUM_YEAR - 10} onChange={action('set year')} />
  ))

storiesOf('MonthPicker', module)
  .add('with initial value', () => (
    <MonthPicker current={2/*March*/} onChange={action('set month')} />
  ))

storiesOf('NextArrow', module)
  .add('main', () => (
    <NextArrow year={2000} month={0/*January*/} onChange={action('set year/month')} />
  ))

storiesOf('PrevArrow', module)
  .add('main', () => (
    <PrevArrow year={2000} month={0/*January*/} onChange={action('set year/month')} />
  ))