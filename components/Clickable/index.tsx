import React from "react";

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
  <span
    onClick={event => {
      if (!bubble) {
        event.stopPropagation();
      }
      if (!disabled) {
        onClick();
      }
    }}
  >
    {children}
  </span>
);

export default Clickable;
