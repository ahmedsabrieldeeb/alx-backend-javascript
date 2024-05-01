export default function cleanSet(set, startsString) {
  if (typeof startsString !== 'string' || startsString.length === 0) return '';

  const filtered = [...set].filter((str) => str && str.startsWith(startsString));
  const cleaned = filtered.map((str) => str.slice(startsString.length));
  return cleaned.join('-');
}
