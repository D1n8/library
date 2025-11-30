import React from "react";
import classes from './MyModal.module.css';

interface IModalProps {
    children: React.ReactNode,
    visible: boolean,
    setVisible: (arg: boolean) => void
}

function MyModal({children, visible, setVisible}: IModalProps) {

    const rootClasses = [classes.myMdl];

    if (visible) {
        rootClasses.push(classes.active)
    }

    return(
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.myMdlContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;