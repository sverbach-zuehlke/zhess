import Image from "next/image";
import { Piece } from "chess.js";

export default function ChessPiece({ piece }: { piece: Piece }) {
  function handleDragStart(event: React.DragEvent<HTMLImageElement>) {
    event.dataTransfer.setData("application/json", JSON.stringify(piece));
    event.dataTransfer.effectAllowed = "move";
  }

  return (
    <Image
      className="z-10 cursor-pointer"
      src={"/chess-pieces/" + piece.type + piece.color + ".svg"}
      alt={piece.type}
      width="75"
      height="40"
      draggable="true"
      onDragStart={(e) => handleDragStart(e)}
    />
  );
}
