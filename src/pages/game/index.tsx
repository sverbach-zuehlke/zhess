import React from "react";
import Link from "next/link";

import { api } from "../../utils/api";
import ChessBoard from "../../components/organisms/game/chess-board";

export default function Game() {
  const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <div className="flex h-full place-content-center items-center">
      <div className="h-[80vmin] w-[80vmin] self-center">
        <ChessBoard />
      </div>
    </div>
  );
}
