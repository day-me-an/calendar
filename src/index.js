import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, hashHistory, withRouter} from 'react-router'

import {Calendar} from './Calendar'
import './index.css'

/**
 * A Calendar that updates the URL when the date is changed.
 */
const RoutedCalendar = (props) => {
  const {year, month} = props.location.query
  return (
    <Calendar
      year={year !== undefined ? parseInt(year, 10) : undefined}
      month={month !== undefined ? parseInt(month, 10) : undefined}
      onChange={(year, month) => props.router.replace({query: {year, month}})}
    />
  )
}

const routings = (
  <Router history={hashHistory}>
    <Route path="/" component={withRouter(RoutedCalendar)} />
  </Router>
)

ReactDOM.render(
  routings,
  document.getElementById('root')
)
