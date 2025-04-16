'use client';
import { Amplify } from 'aws-amplify';
Amplify.configure({});
export default function Providers({ children }) {
  return <>{children}</>;
}
