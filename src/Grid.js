import moment from 'moment'

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