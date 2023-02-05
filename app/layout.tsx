import { PropsWithChildren, ReactElement } from "react";

export default function RootLayout({ children }: PropsWithChildren): ReactElement {
  return (
    <html lang="fr">
      <head />

      <body>{children}</body>
    </html>
  )
}