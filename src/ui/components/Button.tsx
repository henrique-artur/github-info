import React, { ReactNode } from "react";
import './../styles/components/Button.css';

interface ButtonProps {
  children: ReactNode
  prefixIcon?: React.ReactElement
  suffixIcon?: React.ReactElement
  onClick?: (event: React.MouseEvent) => void
  btnType: 'button' | 'submit' | 'reset'
  className?: string 
}
 
function Button({children, prefixIcon, suffixIcon, onClick, btnType, className}: ButtonProps): JSX.Element {
  return (
    <button
      className="appBtn"
      type={btnType}
    >
      {prefixIcon}
      {children}
      {suffixIcon}
    </button>
  )
}
 
export default Button