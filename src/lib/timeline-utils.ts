export const START_YEAR = 2014;
export const END_YEAR = 2026;
export const TOTAL_YEARS = END_YEAR - START_YEAR;

export const getPosition = (year: number) =>
  ((year - START_YEAR) / TOTAL_YEARS) * 100;

export const getWidth = (start: number, end?: number) => {
  const finalEnd = end || END_YEAR;
  return Math.max(((finalEnd - start) / TOTAL_YEARS) * 100, 3);
};
