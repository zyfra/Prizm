import { v4 } from 'uuid';

export function generateId(): string {
  return v4()
}
