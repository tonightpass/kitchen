/**
 * Capitalize the first letter of a string.
 */
export const capitalize = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};
