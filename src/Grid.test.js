import {preOverflow} from './Grid'

describe('preOverflow', () => {
  it('returns dates for a month (March 2017) with some overflow', () => {
    const dates = preOverflow(2017, 2/*March*/)
    expect(dates).toEqual([27, 28])
  })

  it('returns no dates for a month (May 2017) without overflow', () => {
    const dates = preOverflow(2017, 4/*May*/)
    expect(dates).toEqual([])
  })
})