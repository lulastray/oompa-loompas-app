import { isCacheValid } from "../oompaLoompa.helpers";

describe('isCacheValid', () => {
    const onDayInMs = 24 * 60 * 60 * 1000;
    it('should return true if the cache is valid', () => {
        const result = isCacheValid(Date.now() - onDayInMs / 2);
        expect(result).toBe(true);
    });
    it('should return false if the cache is invalid', () => {
        const result = isCacheValid(Date.now() - onDayInMs * 2);
        expect(result).toBe(false);
    })
    it('should return false if the cache is 0', () => { 
        const result = isCacheValid(0);
        expect(result).toBe(false);
    })
})