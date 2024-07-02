import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../../theme";
import {Metadata} from "next";

const APP_NAME = "Mantine Next.js template";
const APP_DESCRIPTION = "I am using Mantine with Next.js!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
      template: `%s - ${APP_NAME}`,
      default: APP_NAME,
  },
  description: APP_DESCRIPTION,
  category: "website",
  generator: "Next.js",
  icons: {
      icon: "/favicon.svg",
  },
  openGraph: {
    siteName: APP_NAME,
    type: "website",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: APP_NAME,
    description: APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
            {children}
        </MantineProvider>
      </body>
    </html>
  );
}
