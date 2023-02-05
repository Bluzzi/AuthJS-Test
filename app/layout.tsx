import { PropsWithChildren, ReactElement } from "react";
import "~/lib/styles/tailwind.css";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body>{children}</body>
    </html>
  );
}