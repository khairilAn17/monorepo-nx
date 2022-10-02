import { render } from '@testing-library/react';

import App from './app';

describe('App', () => {


  it('should have a greeting as the title', () => {
    const { getByText } = render(
        <App />
    );

    expect(getByText(/This is title/gi)).toBeTruthy();
  });
});
