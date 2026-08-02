import { Window } from 'happy-dom';

import { describe, expect, it } from 'bun:test';

function asBrowserElement<T extends Element>(value: unknown): T {
  return value as T;
}

function asBrowserEvent(value: unknown): Event {
  return value as Event;
}

function setNativeValue(element: HTMLInputElement | HTMLTextAreaElement, value: string): void {
  const descriptor = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(element), 'value');

  if (!descriptor?.set) throw new Error('Expected the native value setter to exist');
  descriptor.set.call(element, value);
}

describe('field controls', () => {
  it('composes change and blur handlers and links touched errors', async () => {
    const happyWindow = new Window({ url: 'https://example.test/contact' });
    Object.assign(globalThis, {
      document: happyWindow.document,
      Element: happyWindow.Element,
      Event: happyWindow.Event,
      FocusEvent: happyWindow.FocusEvent,
      HTMLElement: happyWindow.HTMLElement,
      HTMLInputElement: happyWindow.HTMLInputElement,
      HTMLTextAreaElement: happyWindow.HTMLTextAreaElement,
      IS_REACT_ACT_ENVIRONMENT: true,
      navigator: happyWindow.navigator,
      Node: happyWindow.Node,
      window: happyWindow
    });

    const [{ act }, { createRoot }, { useAppForm }] = await Promise.all([
      import('react'),
      import('react-dom/client'),
      import('./index')
    ]);
    const handlerCalls = {
      inputBlur: 0,
      inputChange: 0,
      textareaBlur: 0,
      textareaChange: 0
    };

    function FieldHarness() {
      const form = useAppForm({
        defaultValues: { inputValue: '', textareaValue: '' },
        onSubmit: () => {}
      });

      return (
        <>
          <form.AppField
            name='inputValue'
            validators={{ onBlur: ({ value }) => (value ? undefined : 'Input is required') }}
          >
            {(field) => (
              <>
                <field.TextField
                  aria-describedby='input-help'
                  data-native='input'
                  label='Input value'
                  onBlur={() => {
                    handlerCalls.inputBlur += 1;
                  }}
                  onChange={() => {
                    handlerCalls.inputChange += 1;
                  }}
                />
                <output data-value='input'>{field.state.value}</output>
              </>
            )}
          </form.AppField>
          <form.AppField
            name='textareaValue'
            validators={{ onBlur: ({ value }) => (value ? undefined : 'Textarea is required') }}
          >
            {(field) => (
              <>
                <field.TextAreaField
                  aria-describedby='textarea-help'
                  data-native='textarea'
                  label='Textarea value'
                  onBlur={() => {
                    handlerCalls.textareaBlur += 1;
                  }}
                  onChange={() => {
                    handlerCalls.textareaChange += 1;
                  }}
                />
                <output data-value='textarea'>{field.state.value}</output>
              </>
            )}
          </form.AppField>
        </>
      );
    }

    const container = happyWindow.document.createElement('div');
    happyWindow.document.body.append(container);
    const root = createRoot(asBrowserElement<HTMLDivElement>(container));

    await act(async () => root.render(<FieldHarness />));

    const input = asBrowserElement<HTMLInputElement>(container.querySelector('input'));
    const textarea = asBrowserElement<HTMLTextAreaElement>(container.querySelector('textarea'));

    await act(async () => {
      input.dispatchEvent(asBrowserEvent(new happyWindow.FocusEvent('focusout', { bubbles: true })));
      textarea.dispatchEvent(asBrowserEvent(new happyWindow.FocusEvent('focusout', { bubbles: true })));
    });

    expect(handlerCalls.inputBlur).toBe(1);
    expect(handlerCalls.textareaBlur).toBe(1);
    expect(input.getAttribute('aria-invalid')).toBe('true');
    expect(textarea.getAttribute('aria-invalid')).toBe('true');
    expect(input.getAttribute('aria-describedby')).toBe('input-help inputValue-errors');
    expect(textarea.getAttribute('aria-describedby')).toBe('textarea-help textareaValue-errors');
    expect(container.querySelector('#inputValue-errors')?.getAttribute('aria-live')).toBe('polite');
    expect(container.querySelector('#textareaValue-errors')?.getAttribute('aria-live')).toBe('polite');
    expect(container.querySelector('#inputValue-errors')?.textContent).toContain('Input is required');
    expect(container.querySelector('#textareaValue-errors')?.textContent).toContain('Textarea is required');

    await act(async () => {
      setNativeValue(input, 'Updated input');
      input.dispatchEvent(asBrowserEvent(new happyWindow.Event('input', { bubbles: true })));
      setNativeValue(textarea, 'Updated textarea');
      textarea.dispatchEvent(asBrowserEvent(new happyWindow.Event('input', { bubbles: true })));
    });

    expect(handlerCalls.inputChange).toBe(1);
    expect(handlerCalls.textareaChange).toBe(1);
    expect(container.querySelector('[data-value="input"]')?.textContent).toBe('Updated input');
    expect(container.querySelector('[data-value="textarea"]')?.textContent).toBe('Updated textarea');
    expect(input.getAttribute('data-native')).toBe('input');
    expect(textarea.getAttribute('data-native')).toBe('textarea');

    await act(async () => root.unmount());
  });
});
