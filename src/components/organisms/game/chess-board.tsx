import React from "react";
import { Chess, SQUARES } from "chess.js";
import ChessTile from "../../molecules/game/chess-tile";

export default function ChessBoard() {
  const game = new Chess();
  const activePieces = game
    .board()
    .flatMap((p) => p)
    .filter((p) => p);

  return (
    <div className="grid h-full w-full grid-cols-8 grid-rows-8">
      {SQUARES.map((square) => (
        <ChessTile
          key={square}
          square={square}
          piece={activePieces.find((p) => p?.square === square) ?? undefined}
        />
      ))}
    </div>
  );
}
