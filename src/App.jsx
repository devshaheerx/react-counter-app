import { Minus, Plus, Trash2 } from "lucide-react";
import bg_vid from "./assets/bg_vid.mp4";
import { useState } from "react";


const buttons = [
  {
    label: "Add",
    icon: <Plus size={26} strokeWidth={2.5} />,
    color: "green",
    classes:
      "bg-green-400/10 border-green-400/25 text-green-300 shadow-[0_4px_14px_rgba(74,222,128,0.1)] hover:bg-green-400/25 hover:border-green-400/60 hover:text-green-200 hover:shadow-[0_6px_20px_rgba(74,222,128,0.3)]",
  },
  {
    label: "Sub",
    icon: <Minus size={26} strokeWidth={2.5} />,
    color: "amber",
    classes:
      "bg-amber-400/10 border-amber-400/25 text-amber-300 shadow-[0_4px_14px_rgba(251,191,36,0.1)] hover:bg-amber-400/25 hover:border-amber-400/60 hover:text-amber-200 hover:shadow-[0_6px_20px_rgba(251,191,36,0.3)]",
  },
  {
    label: "Reset",
    icon: <Trash2 size={24} strokeWidth={2} />,
    color: "red",
    classes:
      "bg-red-400/10 border-red-400/25 text-red-300 shadow-[0_4px_14px_rgba(248,113,113,0.1)] hover:bg-red-400/25 hover:border-red-400/60 hover:text-red-200 hover:shadow-[0_6px_20px_rgba(248,113,113,0.3)]",
  },
];

const App = () => {
  const [count, setCount] = useState(0);

  const actions = [
    () => setCount((c) => c + 1),
    () => setCount((c) => (c > 0 ? c - 1 : 0)),
    () => setCount(0),
  ];

  const countColor =
    count === 0
      ? "text-white/40"
      : count > 0
        ? "text-green-300"
        : "text-red-300";

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Background Video */}
      <video
        src={bg_vid}
        className="absolute -z-10 top-0 h-screen w-full object-cover"
        muted
        loop
        autoPlay
      />

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      {/* Card */}
      <div
        className="w-72 rounded-3xl overflow-hidden bg-white/[0.07] backdrop-blur-3xl border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_60px_rgba(0,0,0,0.6),0_0_40px_rgba(255,255,255,0.03)]"
      >
        {/* Header */}
        <div className="px-7 pt-7 pb-5 border-b border-white/10">
          <h1 className="text-4xl font-black tracking-tight text-white">
            Counter App
          </h1>
        </div>

        {/* Count */}
        <div className="py-8 flex items-center justify-center bg-black/10">
          <span
            className={`text-9xl font-black tracking-tighter transition-colors duration-300 ${countColor}`}
          >
            {count}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 px-6 py-6 bg-black/10 border-t border-white/10">
          {buttons.map(({ label, icon, classes }, i) => (
            <button
              key={label}
              onClick={actions[i]}
              className="group flex flex-col items-center gap-2 flex-1"
            >
              <div
                className={`w-full flex items-center justify-center h-14 rounded-2xl border hover:-translate-y-1 hover:scale-105 active:scale-95 active:translate-y-0 transition-all duration-200 cursor-pointer ${classes}`}
              >
                {icon}
              </div>
              <span className="text-[10px] font-medium tracking-widest uppercase text-white/30 group-hover:text-white/55 transition-colors">
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
