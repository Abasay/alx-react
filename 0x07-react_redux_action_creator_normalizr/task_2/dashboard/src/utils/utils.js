export const getFullYear = () => {
  const currentDate = new Date()
  const year = currentDate.getFullYear()

  return year
}

export const getFooterCopy = (isIndex) => {
  if (isIndex) {
    return 'Holberton School'
  }
  return 'Holberton School main dashboard'
}

export const getLatestNotification = () => {
  return '<strong>Urgent requirement</strong> - complete by EOD'
}
