const getDayInfo = date => {
  const months = [
    'января',
    'февраля',
    'марта',
    'апреля',
    'мая',
    'июня',
    'июля',
    'августа',
    'сентября',
    'октября',
    'ноября',
    'декабря',
  ]

  const yourDate = new Date(date)
  const day = yourDate.getDate()
  const month = yourDate.getMonth()
  const year = yourDate.getFullYear()
  const result = `${day}, ${months[month]} ${year} года`
  console.log(result)
}

getDayInfo('01.01.2022')
