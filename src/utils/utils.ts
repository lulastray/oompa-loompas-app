const toCamelCase = (str: string) => {
    return str.replace(/([-_][a-z])/ig, ($1) => {
      return $1.toUpperCase()
        .replace('-', '')
        .replace('_', '');
    });
  }

export const transformToCamelCase =<T>(data: T): T  => {
    if (Array.isArray(data)) {
      return data.map(transformToCamelCase) as unknown as T;
    } else if (data !== null && typeof data === 'object') {
      return Object.keys(data).reduce((acc, key) => {
        const camelKey = toCamelCase(key);
        acc[camelKey] = transformToCamelCase((data as any)[key]);
        return acc;
      }, {} as any) as T;
    }
    return data;
  };