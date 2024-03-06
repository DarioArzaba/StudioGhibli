export const truncate = (
  text: string,
  maxLength: number,
  ellipsis: string = '...',
): string => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength - ellipsis.length) + ellipsis;
};
