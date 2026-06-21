import { Minus, Plus, Trash2 } from "lucide-react";

export const BUTTONS = [
  {
    label: "Add",
    icon: <Plus size={26} strokeWidth={2.5} />,
    classes:
      "bg-green-400/10 border-green-400/25 text-green-300 shadow-[0_4px_14px_rgba(74,222,128,0.1)] hover:bg-green-400/25 hover:border-green-400/60 hover:text-green-200 hover:shadow-[0_6px_20px_rgba(74,222,128,0.3)]",
  },
  {
    label: "Sub",
    icon: <Minus size={26} strokeWidth={2.5} />,
    classes:
      "bg-amber-400/10 border-amber-400/25 text-amber-300 shadow-[0_4px_14px_rgba(251,191,36,0.1)] hover:bg-amber-400/25 hover:border-amber-400/60 hover:text-amber-200 hover:shadow-[0_6px_20px_rgba(251,191,36,0.3)]",
  },
  {
    label: "Reset",
    icon: <Trash2 size={24} strokeWidth={2} />,
    classes:
      "bg-red-400/10 border-red-400/25 text-red-300 shadow-[0_4px_14px_rgba(248,113,113,0.1)] hover:bg-red-400/25 hover:border-red-400/60 hover:text-red-200 hover:shadow-[0_6px_20px_rgba(248,113,113,0.3)]",
  },
];