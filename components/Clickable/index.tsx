import React from "react";
import { Button } from "./components";

interface Props {
  onClick(): void;
  disabled?: boolean;
  bubble?: boolean;
  children: React.ReactNode;
}

const Clickable: React.SFC<Props> = ({
  bubble = false,
  disabled = false,
  onClick,
  children,
}) => (
  <Button
    disabled={disabled}
    onClick={event => {
      if (!bubble) {
        event.stopPropagation();
      }
      onClick();
    }}
  >
    {children}
  </Button>
);

export default Clickable;
