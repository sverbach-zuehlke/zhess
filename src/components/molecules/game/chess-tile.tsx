import React, { useState } from "react";
import { Piece, Square, SQUARES } from "chess.js";
import ChessPiece from "~/components/atoms/game/chess-piece";
import ChessTileRankLabel from "~/components/atoms/game/chess-tile-rank-label";
import ChessTileFileLabel from "~/components/atoms/game/chess-tile-file-label";

export default function ChessTile({
  square,
  piece,
}: {
  square: Square;
  piece?: Piece;
}) {
  const [showDragBorder, setShowDragBorder] = useState(false);
  const file = square[0];
  const rank = Number(square[1]);

  function getBackgroundColor(): string {
    return SQUARES.indexOf(square) % 2 === 1
      ? rank % 2 === 0
        ? "bg-tile-light"
        : "bg-tile-dark"
      : rank % 2 === 0
        ? "bg-tile-dark"
        : "bg-tile-light";
  }

  function handleDragOver(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.dataTransfer.dropEffect = !piece ? "none" : "move";
    setShowDragBorder(true);
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    setShowDragBorder(false);
  }

  function handleDropped(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const movedPiece = JSON.parse(
      event.dataTransfer.getData("application/json"),
    ) as Piece;
    console.log(movedPiece);
    setShowDragBorder(false);
  }

  return (
    <div
      className={`relative flex h-full w-full place-content-center 
        ${getBackgroundColor()}
        ${showDragBorder && "border border-red-600"}`}
      onDragOver={(e) => handleDragOver(e)}
      onDragLeave={(e) => handleDragLeave(e)}
      onDrop={(e) => handleDropped(e)}
    >
      {!!piece && <ChessPiece piece={piece} />}
      {file === "a" && <ChessTileRankLabel rank={rank} />}
      {rank === 1 && file && <ChessTileFileLabel file={file} />}
    </div>
  );
}
