import { LIGHT_RANKS } from "~/utils/game/tile-colors";

export default function ChessTileRankLabel({ rank }: { rank: number }) {
  return (
    <label
      className={`
      absolute left-0 top-0 ps-1 font-bold
        ${LIGHT_RANKS.includes(rank) ? "text-tile-light" : "text-tile-dark"}
      `}
    >
      {rank}
    </label>
  );
}
