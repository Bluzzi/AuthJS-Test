"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { ReactElement } from "react";

export default function Home(): ReactElement {
  const { data, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (status === "authenticated") return (
    <main>
      <p className="text-green-600">Signed in as {data.user?.email}</p>
      <button onClick={(): Promise<void> => signOut()}>Sign out</button>
    </main>
  );

  return (
    <main>
      <p>Unauthenticated</p>

      <button onClick={(): Promise<void> => signIn()}>Sign in</button>
    </main>
  );
}