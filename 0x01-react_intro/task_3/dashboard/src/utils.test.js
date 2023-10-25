import { getFooterCopy, getFullYear, getLatestNotification } from './utils'

//Test for getFullYear
describe('get full year function', () => {
  test('should reurn the current year', () => {
    const currentYear = new Date().getFullYear()
    expect(getFullYear()).toBe(currentYear)
  })
})

//Test for getFooterCopy
describe('get footer copy', () => {
  //When arg is true
  test('should return correct string for the footer with true arg', () => {
    const expectedString = 'Holberton School'
    expect(getFooterCopy(true)).toBe(expectedString)
  })
  //when arg is false
  test('should return correct string for the footer with false arg', () => {
    const expectedString = 'Holberton School main dashboard'
    expect(getFooterCopy(false)).toBe(expectedString)
  })
})

//Test for getLatestNotifications
describe('get latest notifications', () => {
  test('should get latest notifications', () => {
    const expectedString =
      '<strong>Urgent requirement</strong> - complete by EOD'
    expect(getLatestNotification()).toBe(expectedString)
  })
})
