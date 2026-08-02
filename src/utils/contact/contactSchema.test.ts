import { describe, expect, test } from 'bun:test';

import { contactSchema } from './contactSchema';

import type { ContactSubmissionInput } from '@/types/contact';

const MAXIMUM_EMAIL = `${'a'.repeat(64)}@${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(61)}`;
const OVER_LIMIT_EMAIL = `${'a'.repeat(64)}@${'b'.repeat(63)}.${'c'.repeat(63)}.${'d'.repeat(62)}`;

const VALID_VALUES: ContactSubmissionInput = {
  companyWebsite: '',
  email: 'person@example.com',
  firstName: 'First',
  lastName: 'Last',
  message: 'Hello there',
  phoneNumber: ''
};

describe('contactSchema', () => {
  test('accepts valid values and normalizes whitespace and email casing', () => {
    expect(
      contactSchema.parse({
        companyWebsite: '   ',
        email: '  Person@Example.COM  ',
        firstName: '  First  ',
        lastName: '  Last  ',
        message: '  Hello there  ',
        phoneNumber: '  555-0100  '
      })
    ).toEqual({
      companyWebsite: '',
      email: 'person@example.com',
      firstName: 'First',
      lastName: 'Last',
      message: 'Hello there',
      phoneNumber: '555-0100'
    });
  });

  test('rejects invalid email syntax', () => {
    expect(contactSchema.safeParse({ ...VALID_VALUES, email: 'not-an-email' }).success).toBe(false);
  });

  test('rejects blank required fields', () => {
    for (const field of ['email', 'firstName', 'lastName', 'message'] as const) {
      expect(contactSchema.safeParse({ ...VALID_VALUES, [field]: '   ' }).success).toBe(false);
    }
  });

  test('accepts every maximum-length boundary', () => {
    expect(
      contactSchema.safeParse({
        companyWebsite: 'a'.repeat(200),
        email: MAXIMUM_EMAIL,
        firstName: 'a'.repeat(80),
        lastName: 'a'.repeat(80),
        message: 'a'.repeat(5000),
        phoneNumber: '1'.repeat(32)
      }).success
    ).toBe(true);
  });

  test('rejects every over-limit value', () => {
    const invalidValues: ContactSubmissionInput[] = [
      { ...VALID_VALUES, email: OVER_LIMIT_EMAIL },
      { ...VALID_VALUES, firstName: 'a'.repeat(81) },
      { ...VALID_VALUES, lastName: 'a'.repeat(81) },
      { ...VALID_VALUES, message: 'a'.repeat(5001) },
      { ...VALID_VALUES, phoneNumber: '1'.repeat(33) },
      { ...VALID_VALUES, companyWebsite: 'a'.repeat(201) }
    ];

    for (const values of invalidValues) expect(contactSchema.safeParse(values).success).toBe(false);
  });

  test('allows an empty optional phone number', () => {
    expect(contactSchema.parse({ ...VALID_VALUES, phoneNumber: '   ' }).phoneNumber).toBeNull();
  });
});
