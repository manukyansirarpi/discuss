"use client";
import exp from "constants";
import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return (
      <div>
        <p> you are signed in</p>

        <p>{JSON.stringify(session)}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p> you are signed out</p>
      </div>
    );
  }
}
