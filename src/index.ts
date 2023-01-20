import { formattedDate } from "./utils";

interface Streak {
  currentCount: number
  startDate: string
  lastLoginDate: string
}

export function streakCounter(storage: Storage, date: Date) {
  return {
    currentCount: 1,
    startDate: formattedDate(date),
    lastLoginDate: formattedDate(date),
  }
  
}