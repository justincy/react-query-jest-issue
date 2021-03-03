# react-query-jest-issue

Debugging an issue with react-query and jest.

Install this repo and run the test. You will see the following error:

```
    TypeError: Cannot read property 'createContext' of undefined

      1 | import React from 'react';
      2 |
    > 3 | import {QueryClient, QueryClientProvider} from 'react-query';
        | ^
      4 | import { render } from '@testing-library/react';
      5 |
      6 | const queryClient = new QueryClient();

      at Object.<anonymous> (node_modules/react-query/lib/react/QueryClientProvider.js:10:50)
      at Object.<anonymous> (test.js:3:1)
```

It's caused by having `'.'` in the `moduleDirectories` jest config option.
That option was added to make it so that `src/*` imports work within our code.
But it makes jest think that it can resolve modules locally from inside of
any module. So when inside `QueryClientProvider`, it sees an import for
`react` and thinks it should resolve to the current directory because it's
`react-query/lib/react`.
