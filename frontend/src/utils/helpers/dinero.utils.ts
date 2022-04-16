import { PEN } from '@dinero.js/currencies';
import { dinero } from 'dinero.js';

export function dineroPEN(amount: number) {
  return dinero({ amount, currency: PEN });
}
