export type RowID = number;

export interface RowElement {
  [key: string]: any,
  
  firstName: string,
  lastName: string,
  age?: number
};
