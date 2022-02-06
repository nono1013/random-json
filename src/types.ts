export type ValueType = 'id' | 'text' | 'number' | 'email' | 'boolean' | 'date' | 'textarea';

export interface JsonKV {
  type: ValueType;
  key: string;
  value: string | number | boolean | Date;
}
export type Json = JsonKV[];
