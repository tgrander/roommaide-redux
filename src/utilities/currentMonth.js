const abbreviationToMonth = {
    'Jan': 'January',
    'Feb': 'February',
    'Mar': 'March',
    'Apr': 'April',
    'May': 'May',
    'Jun': 'June',
    'Jul': 'July',
    'Aug': 'August',
    'Sep': 'September',
    'Oct': 'October',
    'Nov': 'November',
    'Dec': 'December'
}

export default function currentMonth(){
  const d = new Date(),
        abbreviatedMonth = d.toString().slice(4, 7)
  return abbreviationToMonth[abbreviatedMonth]
}
