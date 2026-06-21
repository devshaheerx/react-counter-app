const ActionButton = ({ label, icon, classes, onClick }) => (
  <button
    onClick={onClick}
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
);

export default ActionButton;