import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement, ReactElement } from "react";
import { cn } from "@/lib/utils";

type PlaceholderProps = {
  label: string;
  icon?: ReactElement;
  button?: ReactElement;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center gap-y-2">
      {cloneElement(icon, {
        className: cn("w-16 h-16", icon.props.className),
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: cn("h-10", button.props.className),
      })}
    </div>
  );
};

export default Placeholder;
