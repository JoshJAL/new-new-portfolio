export interface ContactFormValues {
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phoneNumber: string;
}

export type ContactActionResult = { status: 'success' } | { status: 'error'; message: string };
