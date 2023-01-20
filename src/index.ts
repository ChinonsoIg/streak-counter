interface Streak {
  currentCount: number
  startDate: string
  lastLoginDate: string
}

export function streakCounter(storage: Storage, date: Date) {
  return {
    currentCount: 1,
    startDate: "1/20/2023",
    lastLoginDate: "1/20/2023",
  }
  
}