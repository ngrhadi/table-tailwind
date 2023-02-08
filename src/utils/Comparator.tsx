export function sort<T>(array: T[], property: keyof T, orderBy: boolean): T[] {
  return orderBy
    ? array.sort((a, b) => (a[property] > b[property] ? 1 : -1))
    : array.sort((a, b) => (a[property] < b[property] ? 1 : -1));
}
