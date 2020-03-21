import React from 'react';
import { render } from '@testing-library/react';

import UserList from './UserList';

it('renders a dark mode button', () => {
  const mockData = [{ name: 'rabah', country: 'algeria', searches: 100 }];

  const { getByTestId } = render(<UserList userList={mockData} />);

  getByTestId('dark-mode-btn');
});
