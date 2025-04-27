import { getCurrentUser } from 'aws-amplify/auth/server';
import outputs from '../../amplify_outputs.json';
import { cookies } from 'next/headers';
import { createServerRunner } from '@aws-amplify/adapter-nextjs'

export const { runWithAmplifyServerContext } = createServerRunner({
  config: outputs,
});

export async function GetAuthCurrentUserServer() {
  try {
    const currentUser = await runWithAmplifyServerContext({
      nextServerContext: { cookies },
      operation: (context) => getCurrentUser(context),
    });
    return currentUser;
  } catch (err) {
    console.log(err);
  }
}
