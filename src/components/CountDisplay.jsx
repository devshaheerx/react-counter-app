const CountDisplay = ({ count }) => {
  const countColor =
    count === 0
      ? "text-white/40"
      : count > 0
        ? "text-green-300"
        : "text-red-300";

  return (
    <div className="py-8 flex items-center justify-center bg-black/10">
      <span
        className={`text-9xl font-black tracking-tighter transition-colors duration-300 ${countColor}`}
      >
        {count}
      </span>
    </div>
  );
};

export default CountDisplay;