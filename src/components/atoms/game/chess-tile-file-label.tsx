import { LIGHT_FILES } from "~/utils/game/tile-colors";

export default function ChessTileFileLabel({ file }: { file: string }) {
  return (
    <label
      className={`
      absolute bottom-0 right-0 pr-1 font-bold
        ${LIGHT_FILES.includes(file) ? "text-tile-light" : "text-tile-dark"}
      `}
    >
      {file}
    </label>
  );
}
