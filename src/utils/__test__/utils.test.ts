import { toCamelCase } from '../utils';

describe('toCamelCase', () => {
  it('should convert snake_case to camelCase', () => {
    const result = toCamelCase('hello_world');
    expect(result).toBe('helloWorld');
  });

  it('should convert kebab-case to camelCase', () => {
    const result = toCamelCase('hello-world');
    expect(result).toBe('helloWorld');
  });

  it('should handle strings without special characters', () => {
    const result = toCamelCase('hello');
    expect(result).toBe('hello');
  });

  it('should handle multiple words with underscores and dashes', () => {
    const result = toCamelCase('snake_case-and_kebab_case');
    expect(result).toBe('snakeCaseAndKebabCase');
  });

  it('should return an empty string when given an empty string', () => {
    const result = toCamelCase('');
    expect(result).toBe('');
  });
});
