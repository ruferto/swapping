export const firstLetterToUppercase = (string: string) =>
  string
    .replace(/^\w/, (c) => c.toUpperCase())
    .replace('_', ' ')
    .replace('_', ' ');
