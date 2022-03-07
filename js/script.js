const capitalize = str => str[0].toUpperCase() + str.slice(1)

const getDayInfo = date => {
  const [day, month, year] = date.split('.').map(Number)
  const outDate = new Date(year, month - 1, day)
  const week = Math.ceil(day / 7)

  const [monthName, weekDayName] = outDate
    .toLocaleDateString('ru', { weekday: 'long', month: 'long' })
    .split(' ')
    .map(capitalize)

  return console.log(`${weekDayName}, ${week} неделя ${monthName} ${year} года`)
}

getDayInfo('01.01.2022')
