import { render } from '@testing-library/react';

import Flyer from './flyer';

describe('Flyer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Flyer />);
    expect(baseElement).toBeTruthy();
  });
});
