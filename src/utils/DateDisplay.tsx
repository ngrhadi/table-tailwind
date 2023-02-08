export function setDisplayDate(date: string): string {
  const monthNames = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  let day = new Date(date).getDay();
  let month = monthNames[new Date(date).getMonth() + 1];
  let year = new Date(date).getFullYear();
  return `${month} ${day}, ${year}`;
}
