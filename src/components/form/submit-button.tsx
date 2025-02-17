"use client";

import clsx from "clsx";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({ label, icon, variant, size }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} variant={variant} size={size}>
      {pending && (
        <LucideLoaderCircle
          className={clsx("mr-2 h-4 w-4 animate-spin", { "mr-2": !!label })}
        />
      )}
      {label}
      {pending
        ? null
        : icon && <span className={clsx({ "ml-2": !!label })}>{icon}</span>}
    </Button>
  );
};

export default SubmitButton;
