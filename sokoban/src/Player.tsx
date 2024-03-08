import { useState, useEffect } from "react";
import "./player.css";

interface IPlayer {
  x: number;
  y: number;
}

export function Player({ x, y }: IPlayer): JSX.Element {
  const [cordX, setX] = useState<number>(x);
  const [cordY, setY] = useState<number>(y);

  const handleKeyDown = (key: string) => {
    if (key === "ArrowRight") {
      console.log("right");
      setX(cordX + 1);
    } else if (key === "ArrowLeft") {
      console.log("left");
      setX(cordX - 1);
    } else if (key === "ArrowUp") {
      console.log("up");
      setY(cordY - 1);
    } else if (key === "ArrowDown") {
      console.log("down");
      setY(cordY + 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      handleKeyDown(e.key);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [cordX, cordY]);

  return (
    <>
      <div
        className="player"
        style={{
          gridColumn: `${cordX}/${cordX}`,
          gridRow: `${cordY}/${cordY}`,
        }}
      ></div>
    </>
  );
}
