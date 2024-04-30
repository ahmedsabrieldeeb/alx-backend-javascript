export default function getStudentsByLocation(array = [], city = '') {
  if (!(array instanceof Array) || city.length === 0) return [];

  return array.filter((value) => value.location === city);
}
