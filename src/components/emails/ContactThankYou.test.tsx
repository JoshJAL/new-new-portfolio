import ContactThankYou from './ContactThankYou';

import { render } from '@react-email/render';
import { describe, expect, it } from 'bun:test';

const SENTINEL_FIRST_NAME = 'TestFirstName';
const SENTINEL_LAST_NAME = 'TestLastName';

describe('ContactThankYou', () => {
  it('renders the thank-you email for the recipient', async () => {
    const html = await render(<ContactThankYou firstName={SENTINEL_FIRST_NAME} lastName={SENTINEL_LAST_NAME} />);

    expect(html).toContain('Thank you for your message!');
    expect(html).toContain(SENTINEL_FIRST_NAME);
    expect(html).toContain(SENTINEL_LAST_NAME);
  });
});
