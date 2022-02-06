export type ValueType = 'id' | 'text' | 'number' | 'email' | 'boolean' | 'date' | 'textarea';
export type Value = string | number | boolean | Date;

export interface JsonKV {
  type: ValueType;
  key: string;
  value: Value;
}
export type Json = JsonKV[];
