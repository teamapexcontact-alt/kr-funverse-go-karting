// utils/formatDate.ts — DATE FORMATTING HELPER
// PURPOSE: Utility functions for formatting dates in a user-friendly way
// Functions: formatDate (e.g., "2024-12-15" → "Dec 15, 2024"), isWeekend, getNextAvailableDate
// Used by: BookingForm, ReviewCard, any component displaying dates

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function isWeekend(date: Date): boolean {
  const day = date.getDay();
  return day === 0 || day === 6; // Sunday = 0, Saturday = 6
}
