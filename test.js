import React from 'react';

import {QueryClient, QueryClientProvider} from 'react-query';
import { render } from '@testing-library/react';

const queryClient = new QueryClient();

it('test', () => {
  render(<QueryClientProvider client={queryClient}><div>foo</div></QueryClientProvider>)
});