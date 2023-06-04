export const sortingTypeGenerator = (state: any, type: string) => {
    const typeVal = type === 'rating' ? 'vote' : 'title';
    const isAscending = type === 'ascending' || type === 'vote';
  
    const compareFunction = (a: any, b: any) => {
      if (a[typeVal] < b[typeVal]) return -1;
      if (a[typeVal] > b[typeVal]) return 1;
      return 0;
    };
  
    return [...state].sort(isAscending ? compareFunction : (a, b) => compareFunction(b, a));
  };