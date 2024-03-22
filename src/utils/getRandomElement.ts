export function getRandomElement<T>(array: T[], prevIndex: number): number {
  if (array.length === 0) return 0;
  const randomIndex = Math.floor(Math.random() * array.length);
  if (prevIndex && randomIndex === prevIndex)
    return getRandomElement(array, prevIndex);
  return randomIndex;
}
