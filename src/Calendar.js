import React from 'react'
import moment from 'moment'
import _range from 'lodash.range'

import {Grid} from './Grid'

export const Calendar = (props) => {
  const year = props.year !== undefined ? props.year : moment().year()
  const month = props.month !== undefined ? props.month : moment().month()
  return (
    <div>
      <div>
        <PrevArrow year={year} month={month} onChange={props.onChange} />
        <YearPicker current={year} onChange={nextYear => props.onChange(nextYear, month)} />
        <MonthPicker current={month} onChange={nextMonth => props.onChange(year, nextMonth)} />
        <NextArrow year={year} month={month} onChange={props.onChange} />
      </div>
      <Grid year={year} month={month} />
    </div>
  )
}

Calendar.propTypes = {
  year: React.PropTypes.number,
  month: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
}

export const NextArrow = (props) => {
  const change = () => {
    const {year, month} = props
    const date = moment({year, month})
    date.add(1, 'month')

    props.onChange(date.year(), date.month())
  }
  return (
    <button onClick={change}>Next</button>
  )
}

export const PrevArrow = (props) => {
  const change = () => {
    const {year, month} = props
    const date = moment({year, month})
    date.subtract(1, 'month')

    props.onChange(date.year(), date.month())
  }
  return (
    <button onClick={change}>Prev</button>
  )
}

NextArrow.propTypes = PrevArrow.propTypes = {
  year: React.PropTypes.number.isRequired,
  month: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
}

export const YearPicker = (props) => {
  const currentYear = moment().year()
  const years = _range(currentYear, 1900 - 1)
  return (
    <select value={props.current} onChange={event => {props.onChange(parseInt(event.target.value, 10))}}>
      {years.map(year => <option key={year} value={year}>{year}</option>)}
    </select>
  )
}

YearPicker.propTypes = {
  current: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
}

export const MonthPicker = (props) => {
  const months = moment.months()
  return (
    <select value={props.current} onChange={event => {props.onChange(parseInt(event.target.value, 10))}}>
      {months.map((month, monthNumber) => <option key={month} value={monthNumber}>{month}</option>)}
    </select>
  )
}

MonthPicker.propTypes = {
  current: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
}