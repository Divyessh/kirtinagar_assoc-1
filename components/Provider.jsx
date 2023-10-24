'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved
import { Provider } from 'react-redux';

import { store } from '../redux/store';

const NextSessionProvider = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};

export default NextSessionProvider;
