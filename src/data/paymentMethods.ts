// src/data/paymentMethods.ts
export interface PaymentMethod {
  slug: string;
  name: string;
  type: 'card' | 'ewallet' | 'bank' | 'prepaid';
  isPopularUK: boolean;
}

export const paymentMethods: PaymentMethod[] = [
  { slug: 'debit-cards', name: 'Debit Cards', type: 'card', isPopularUK: true },
  { slug: 'credit-cards', name: 'Credit Cards', type: 'card', isPopularUK: false },
  { slug: 'apple-pay', name: 'Apple Pay', type: 'card', isPopularUK: true },
  { slug: 'google-pay', name: 'Google Pay', type: 'card', isPopularUK: true },
  { slug: 'paypal', name: 'PayPal', type: 'ewallet', isPopularUK: true },
  { slug: 'skrill', name: 'Skrill', type: 'ewallet', isPopularUK: true },
  { slug: 'neteller', name: 'Neteller', type: 'ewallet', isPopularUK: true },
  { slug: 'bank-transfer', name: 'Bank Transfer', type: 'bank', isPopularUK: true },
  { slug: 'instant-bank-transfer', name: 'Instant Bank Transfer', type: 'bank', isPopularUK: true },
  { slug: 'trustly', name: 'Trustly', type: 'bank', isPopularUK: true },
  { slug: 'klarna', name: 'Klarna', type: 'bank', isPopularUK: false },
  { slug: 'paysafecard', name: 'Paysafecard', type: 'prepaid', isPopularUK: true },
];

export function getPaymentIconPath(slug: string): string {
  return `/images/payments/${slug}.svg`;
}

export function getPaymentBySlug(slug: string): PaymentMethod | undefined {
  return paymentMethods.find((method) => method.slug === slug);
}

export function getPaymentsByType(type: PaymentMethod['type']): PaymentMethod[] {
  return paymentMethods.filter((method) => method.type === type);
}

export function getPopularUKPayments(): PaymentMethod[] {
  return paymentMethods.filter((method) => method.isPopularUK);
}