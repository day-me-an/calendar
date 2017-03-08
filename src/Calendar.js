import React from 'react'
import moment from 'moment'
import _range from 'lodash.range'

export const YearPicker = (props) => {
  const currentYear = moment().year()
  const years = _range(currentYear, 1900 - 1)
  return (
    <select defaultValue={props.current} onChange={event => {props.onChange(event.target.value)}}>
      {years.map(year => <option key={year} value={year}>{year}</option>)}
    </select>
  )
}

YearPicker.propTypes = {
  current: React.PropTypes.number,
  onChange: React.PropTypes.func.isRequired,
}