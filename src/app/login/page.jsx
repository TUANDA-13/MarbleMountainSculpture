'use client'

import { withAuthenticator } from '@aws-amplify/ui-react';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css'

const Signup = ({ user }) => {
  useEffect(() => {
    if (user) {
      redirect('/');
    }
  });

  return null;
};

export default withAuthenticator(Signup);