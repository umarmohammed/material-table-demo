import { arrayRange } from './array-utils';

export const numColumns = 20;

export function getColumnNames(): string[] {
  return arrayRange(numColumns).map(columnIndex => `column${columnIndex + 1}`);
}

export function generateDataArray(numData: number): any[] {
  let idArray = arrayRange(numData);
  return idArray.map(id => createDataItem(id));
}

export function createDataItem(id: number): any {
  let data = { id };

  getColumnNames().forEach(column => {
    data[column] = `${column} ${id}`;
  });

  return data;
}
