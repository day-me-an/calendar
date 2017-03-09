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

const styles = {
  overflowDay: {
    color: 'gray'
  }
}

export const Grid = (props) => {
  const {year, month} = props
  const overflowStart = preOverflow(year, month)
  const overflowEnd = nextOverflow(year, month)
  const monthLength = moment({year, month}).daysInMonth()

  const days = [].concat(
    overflowStart.map(day => <OverflowDay day={day} key={day} />),
    _range(1, monthLength + 1).map(day => <NormalDay day={day} key={day} />),
    overflowEnd.map(day => <OverflowDay day={day} key={day} />)
  )
  if (days.length % 7 > 0) {
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
  year: React.PropTypes.number.isRequired,
  month: React.PropTypes.number.isRequired,
}

const Week = (props) => (
  <tr>
    {props.days}
  </tr>
)

Week.propTypes = {
  days: React.PropTypes.arrayOf(React.PropTypes.any).isRequired,
}

const NormalDay = (props) => (<td>{props.day}</td>)
const OverflowDay = (props) => (<td style={styles.overflowDay}>{props.day}</td>)

OverflowDay.propTypes = NormalDay.propTypes = {
  day: React.PropTypes.number.isRequired,
}