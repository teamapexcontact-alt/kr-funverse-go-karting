export interface LeaderboardRecord {
  id: string;
  name: string;
  time: string;
  date: string;
  kartNumber: string;
  laps: number;
}

const STORAGE_KEY = "krfunverse-leaderboard";

const defaultRecords: LeaderboardRecord[] = [
  { id: "1", name: "Racer 07", time: "44.8s", date: "2026-07-01", kartNumber: "K-07", laps: 12 },
  { id: "2", name: "Racer 42", time: "47.2s", date: "2026-06-28", kartNumber: "K-42", laps: 10 },
  { id: "3", name: "Racer 19", time: "49.1s", date: "2026-06-25", kartNumber: "K-19", laps: 8 },
  { id: "4", name: "Racer 33", time: "50.4s", date: "2026-06-22", kartNumber: "K-33", laps: 9 },
  { id: "5", name: "Racer 11", time: "51.7s", date: "2026-06-20", kartNumber: "K-11", laps: 7 },
];

export function getLeaderboard(): LeaderboardRecord[] {
  if (typeof window === "undefined") return defaultRecords;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored) as LeaderboardRecord[];
      return parsed.sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
    }
  } catch {}
  return defaultRecords;
}

export function saveLeaderboard(records: LeaderboardRecord[]): void {
  if (typeof window === "undefined") return;
  const sorted = [...records].sort((a, b) => parseFloat(a.time) - parseFloat(b.time));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sorted));
}
