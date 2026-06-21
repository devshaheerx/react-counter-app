import { useState } from "react";
import { BUTTONS } from "../constants/Buttons";
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
    <div
      className="
        w-[85vw]
        max-w-[15rem]
        sm:max-w-[17rem]
        md:max-w-xs
        lg:max-w-sm
        xl:max-w-sm
        rounded-xl sm:rounded-2xl md:rounded-3xl
        overflow-hidden
        bg-white/[0.07] backdrop-blur-3xl
        border border-white/15
        shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(255,255,255,0.03)]
      "
    >
      {/* Header */}
      <div className="px-4 pt-4 pb-3 sm:px-5 sm:pt-5 sm:pb-4 md:px-6 md:pt-6 md:pb-4 lg:px-7 lg:pt-7 lg:pb-5 border-b border-white/10">
        <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black tracking-tight text-white">
          Counter App
        </h1>
      </div>

      {/* Count */}
      <CountDisplay count={count} />

      {/* Buttons */}
      <div className="flex gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 px-3 py-3 sm:px-4 sm:py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 bg-black/10 border-t border-white/10">
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