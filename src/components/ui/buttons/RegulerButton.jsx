import { Button } from "@material-tailwind/react";

export function RegulerButton({ props, label, icon }) {
  return (
    <Button {...props}>
      {label}
      {icon && <span className="text-xl inline-block">{icon}</span>}
    </Button>
  );
}
