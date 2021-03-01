export const formatDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  // split received date
  const splittedDate = date.split("-")

  const newDay = splittedDate[2]
  const tempMonth = splittedDate[1].split("0")[1]

  const newMonth = months.find((month) => month == months[tempMonth - 1])

  const newYear = splittedDate[0]

  const newDate = `${newMonth} ${newDay}, ${newYear}`
  return newDate
}

export default formatDate
