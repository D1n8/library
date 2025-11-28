import * as React from 'react';
import classes from './MyButton.module.css';

interface IMyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function MyButton({children, ...props}: IMyButtonProps) {
    return ( <button className={classes.myBtn} {...props}>{children}</button> );
}

export default MyButton;