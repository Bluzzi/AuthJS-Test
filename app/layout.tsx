"use client";

import { PropsWithChildren, ReactElement } from "react";
import { SessionProvider } from "next-auth/react";
import "~/lib/styles/tailwind.css";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body>
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}