export const getFullYear = () => {
  const currentDateToArr = Date().split(' ')
  const year = currentDateToArr[3]

  return year
}

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return <span>Holberton School</span>
  }
  return 'Holberton School main dashboard'
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD'
}
