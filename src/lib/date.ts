/**
 * Formats a date string into a more readable format.
 *
 * @param dateString - The date string to format.
 * @returns The formatted date string in the format "MMM DD, YYYY".
 */
export const formatDate = (dateString: string): string =>
  new Date(dateString).toLocaleDateString('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
