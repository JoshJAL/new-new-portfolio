export interface ContactSubmissionInput {
  companyWebsite: string;
  email: string;
  firstName: string;
  lastName: string;
  message: string;
  phoneNumber: string;
}

export interface ContactSubmission extends Omit<ContactSubmissionInput, 'phoneNumber'> {
  phoneNumber: string | null;
}

export type SubmitContactResult =
  | { ok: true }
  | { ok: false; code: 'invalid' | 'server_error'; message: string }
  | {
      ok: false;
      code: 'rate_limited';
      message: string;
      retryAfterSeconds: number;
    };
