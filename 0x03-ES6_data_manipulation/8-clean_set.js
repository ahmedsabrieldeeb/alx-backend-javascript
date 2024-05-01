export default function cleanSet(set, startsString) {
  if (startsString === '') return startsString;

  const filtered = [...set].filter((str) => str.startsWith(startsString));
  const cleaned = filtered.map((str) => str.slice(startsString.length));
  return cleaned.join('-');
}
