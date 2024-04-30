export default function getStudentsByLocation(array = [], city = '') {
  if (!(array instanceof Array)) return [];
  if (city.length === 0) return array;

  return array.filter((value) => value.location === city);
}
