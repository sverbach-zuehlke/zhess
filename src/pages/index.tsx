import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <h1>This is the home page :)</h1>
      <p>Greeting from remote: {hello.data?.greeting}</p>
      <Link href="/game">
        <b>To the game</b>
      </Link>
    </>
  );
}
