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
        <YearPicker current={year} onChange={nextYear => props.onChange(nextYear, month)} />
        <MonthPicker current={month} onChange={nextMonth => props.onChange(year, nextMonth)} />
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

export const YearPicker = (props) => {
  const currentYear = moment().year()
  const years = _range(currentYear, 1900 - 1)
  return (
    <select defaultValue={props.current} onChange={event => {props.onChange(parseInt(event.target.value))}}>
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
    <select defaultValue={props.current} onChange={event => {props.onChange(parseInt(event.target.value))}}>
      {months.map((month, monthNumber) => <option key={month} value={monthNumber}>{month}</option>)}
    </select>
  )
}

MonthPicker.propTypes = {
  current: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
}