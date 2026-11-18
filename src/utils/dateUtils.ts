export function calculateDaysTogether(startDateStr: string): number {
  const parts = startDateStr.split("-").map(Number);
  if (parts.length !== 3 || parts.some((n) => Number.isNaN(n))) {
    return 1;
  }

  const [year, month, day] = parts;
  const start = new Date(year, month - 1, day);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  const diffMs = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  // Inclusive count starting at day 1 on the start date
  return Math.max(1, diffDays + 1);
}
