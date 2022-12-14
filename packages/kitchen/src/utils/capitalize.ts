/**
 * Capitalize the first letter of a string.
 */
const capitalize = (s: string): string => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

export default capitalize;
