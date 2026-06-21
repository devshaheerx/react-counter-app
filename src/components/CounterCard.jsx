import { useState } from "react";
import { BUTTONS } from "../constants/buttons";
import CountDisplay from "./CountDisplay";
import ActionButton from "./ActionButton";

const CounterCard = () => {
  const [count, setCount] = useState(0);

  const actions = [
    () => setCount((c) => c + 1),
    () => setCount((c) => (c > 0 ? c - 1 : 0)),
    () => setCount(0),
  ];

  return (
    <div className="w-72 rounded-3xl overflow-hidden bg-white/[0.07] backdrop-blur-3xl border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(255,255,255,0.03)]">
      {/* Header */}
      <div className="px-7 pt-7 pb-5 border-b border-white/10">
        <h1 className="text-4xl font-black tracking-tight text-white">
          Counter App
        </h1>
      </div>

      {/* Count */}
      <CountDisplay count={count} />

      {/* Buttons */}
      <div className="flex gap-3 px-6 py-6 bg-black/10 border-t border-white/10">
        {BUTTONS.map(({ label, icon, classes }, i) => (
          <ActionButton
            key={label}
            label={label}
            icon={icon}
            classes={classes}
            onClick={actions[i]}
          />
        ))}
      </div>
    </div>
  );
};

export default CounterCard;