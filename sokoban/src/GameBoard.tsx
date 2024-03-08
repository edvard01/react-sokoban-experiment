import { Player } from "./Player";
import "./gameBoard.css";

export function GameBoard(): JSX.Element {
  return (
    <>
      <div className="game-board">
        <Player x={5} y={5} />
      </div>
    </>
  );
}
