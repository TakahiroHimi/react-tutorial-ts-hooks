import React from "react";
import { History } from "../interface";

interface MovesProps {
  history: History[];
  jumpTo: (move: number) => void;
}

const Moves: React.FC<MovesProps> = ({ history, jumpTo }) => {
  return (
    <ol>
      {history.map((_, move) => {
        const desc = move ? "Go to move #" + move : "Go to game start";
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
          </li>
        );
      })}
    </ol>
  );
};

export default Moves;