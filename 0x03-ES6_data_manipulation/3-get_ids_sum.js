export default function getStudentIdsSum(array) {
  if (!(array instanceof Array)) return -1;// no array has passed

  return array.reduce((x, y) => x + y.id, 0);
}
