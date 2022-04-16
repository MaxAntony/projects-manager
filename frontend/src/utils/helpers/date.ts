/**
 * @param  date example: 2021-07-12T23:07:44.169Z or another format acepted by new Date() constructor
 * @returns formated date: 21/12/20
 */
export function formatDate(date: string) {
  let dateObj = new Date(date);
  return dateObj.toLocaleString([], { day: 'numeric', month: '2-digit', year: '2-digit' });
}

/**
 * @param  date example: 2021-07-12T23:07:44.169Z or another format acepted by new Date() constructor
 * @returns formated date: 12/07/21 6:15 am
 */
export function formatDateTime(date: string) {
  // return new Date(date).toLocaleString('es-PE', {
  //   day: 'numeric',
  //   month: '2-digit',
  //   year: '2-digit',
  //   hour12: true,
  //   hour: 'numeric',
  //   minute: 'numeric',
  // });
  return `${formatDate(date)} ${formatTime(date)}`;
}

/**
 * @param  date example: 2021-07-12T23:07:44.169Z or another format acepted by new Date() constructor
 * @returns formated date: 6:15 am
 */
export function formatTime(date: string) {
  return new Date(date)
    .toLocaleTimeString('es-PE', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .replace(/p\.\sm\./g, 'pm')
    .replace(/a\.\sm\./g, 'am');
}
