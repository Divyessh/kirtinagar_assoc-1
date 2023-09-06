'use client';

import { SessionProvider } from 'next-auth/react';
import React from 'react';

const NextSessionProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default NextSessionProvider;
