import React from 'react';
import { render } from '@testing-library/react';

import TestApp from './test-app';

describe(' TestApp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TestApp />);
    expect(baseElement).toBeTruthy();
  });
});
