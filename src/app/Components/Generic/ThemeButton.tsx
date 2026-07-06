import React from "react";
import "../../Stylings/ThemeButton.css";

export interface ThemButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function ThemeButton({
  children,
  ...buttonProps
}: ThemeButtonProps) {
  return (
    <button {...buttonProps} className={`ThemeButton ${buttonProps.className}`}>
      {children}
    </button>
  );
}
