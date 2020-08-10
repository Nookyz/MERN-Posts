

export const getReadableTime = (date) => {
  
  const fullYear = new Date(date).getFullYear()
  const month = `${new Date(date).getMonth()}`.padStart(2, '0')
  const day = `${new Date(date).getDate()}`.padStart(2, '0')
  const hours = `${new Date(date).getHours()}`.padStart(2, '0')
  const minutes = `${new Date(date).getMinutes()}`.padStart(2, '0')
  const seconds = `${new Date(date).getSeconds()}`.padStart(2, '0')

  return `${day}.${month}.${fullYear} в ${hours}:${minutes}:${seconds}`;
}