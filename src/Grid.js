import React from 'react'
import moment from 'moment'
import _range from 'lodash.range'
import _chunk from 'lodash.chunk'

/**
 * Returns the overflowing days from the preceding month.
 * @returns {Array} An array of days.
 * @param {number} year
 * @param {number} month A zero-indexed month.
 */
export function preOverflow(year, month) {
  const firstDay = moment({month, year, day: 1})
  // The week starts on Monday with isoWeekday().
  const overflowCount = firstDay.isoWeekday() - 1/*Monday*/
    
  const overflowDates = []
  for (let day = overflowCount; day > 0; day--) {
    overflowDates.push(firstDay.clone().subtract(day, 'day').date())
  }

  return overflowDates
}

/**
 * Returns the overflowing days in the next month.
 * @returns {Array} An array of days.
 * @param {number} year
 * @param {number} month A zero-indexed month.
 */
export function nextOverflow(year, month) {
  const lastDay = moment({month, year}).endOf('month')
  const overflowCount = 7/*Sunday*/ - lastDay.isoWeekday()

  const overflowDates = []
  for (let day = 1; day <= overflowCount; day++) {
    overflowDates.push(lastDay.clone().add(day, 'day').date())
  }

  return overflowDates
}

export const Grid = (props) => {
  const days = [].concat(props.overflowStart, _range(1, props.days + 1), props.overflowEnd)
  if (days.length % 7 != 0) {
    throw new Error(`Total number of days ${days.length} can't be rendered as weeks because it's not divisible by 7`)
  }
  const weeks = _chunk(days, 7)

  return (
    <table>
      <thead>
        <tr>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
          <th>Su</th>
        </tr>
      </thead>
      <tbody>
        {weeks.map((days, i) => <Week key={`week-${i}`} days={days} />)}
      </tbody>
    </table>
  )
}

Grid.propTypes = {
  days: React.PropTypes.number.isRequired,
  overflowStart: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
  overflowEnd: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
}

const Week = (props) => (
  <tr>
    {props.days.map(day => <td key={day}>{day}</td>)}
  </tr>
)

Week.propTypes = {
  days: React.PropTypes.arrayOf(React.PropTypes.number).isRequired,
}