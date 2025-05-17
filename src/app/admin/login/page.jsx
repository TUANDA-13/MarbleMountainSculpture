"use client";

import AmplifyConfig from "@/components/config/AmplifyConfig";
import { Authenticator, Flex } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

export default function Login() {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-96px-328px)]">
        <Flex flex={1} justifyContent="center" alignItems="center" direction={"column"}>
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </Flex>
      </div>
    </div>
  );
}
