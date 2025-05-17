'use client'

import AmplifyConfig from "@/components/config/AmplifyConfig";
import { ThemeProvider } from "@aws-amplify/ui-react";

export default function AdminLayout({ children }) {
  const theme = {
    name: 'custom-theme',
    tokens: {
      components: {
        card: {
          backgroundColor: { value: '{colors.background.secondary}' },
          outlined: {
            borderColor: { value: '{colors.black}' },
          },
        },
        heading: {
          color: { value: '{colors.secondary[80]}' },
        },
        text: {
          color: { value: '{colors.primary[80]}' },
        },
      },
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <AmplifyConfig>
        <div className="container flex">
          <div className="flex-1 min-h-[calc(100vh-96px-328px)]">
            {children}
          </div>
        </div>
      </AmplifyConfig>
    </ThemeProvider>
  );
}
