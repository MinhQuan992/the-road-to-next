import { LucideMessageSquareWarning } from "lucide-react";
import { ReactElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement;
  button?: ReactElement;
};

const Placeholder = ({ label, icon, button }: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {icon ? icon : <LucideMessageSquareWarning className="w-16 h-16" />}
      <h2 className="text-lg text-center">{label}</h2>
      {button ? button : <div className="h-10" />}
    </div>
  );
};

export default Placeholder;
