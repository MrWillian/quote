export const sanitizeDate = (date: Date) => new Date(date).toLocaleString().split(',')[0];
