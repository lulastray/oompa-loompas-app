
const onDayInMs = 24 * 60 * 60 * 1000;
export const isCacheValid = (lastFetched:number) => lastFetched && Date.now() - lastFetched < onDayInMs;
