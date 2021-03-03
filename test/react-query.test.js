import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';
import { render } from '@testing-library/react';
import Foo from 'src/Foo';

const queryClient = new QueryClient();

it('test', () => {
  render(<QueryClientProvider client={queryClient}><Foo /></QueryClientProvider>)
});