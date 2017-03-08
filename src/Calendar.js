import React from 'react'
import moment from 'moment'
import _range from 'lodash.range'

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