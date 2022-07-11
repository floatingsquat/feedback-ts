import React, { ReactNode } from 'react'
import styles from './style.module.scss'
type ButtonType={
    children: ReactNode;
    variant?: string;
    onClick?: ()=> void;
}
function Button({children, variant, ...props} : ButtonType) {
  return (
    <button {...props} className={variant === "close" ? styles.buttonClose : styles.buttonPrimary} >{children}</button>
  )
}

export default Button