import {preOverflow, nextOverflow} from './Grid'

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

describe('nextOverflow', () => {
  it('returns dates for a month (March 2017) with some overflow', () => {
    const dates = nextOverflow(2017, 2/*March*/)
    expect(dates).toEqual([1, 2])
  })

  it('returns no dates for a month (April 2017) without overflow', () => {
    const dates = nextOverflow(2017, 3/*April*/)
    expect(dates).toEqual([])
  })
})