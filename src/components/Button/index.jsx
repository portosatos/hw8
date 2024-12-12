import "./index.css"
import React from 'react';

export function Button(props) {
    const {type="button", onClick, disabled=false, variant="primary", size="md", children} = props;
    const className = `btn btn--${variant} btn--${size}`;

    const doNothing = () => {
        console.log("This button did nothing...");
    }

    let onClickHandler;

    switch (onClick) {
        case "doNothing":
            onClickHandler = doNothing;
            break;
        default:
            if (typeof onClick !== "string"){
                onClickHandler = onClick;
            } else {
                onClickHandler = doNothing;
            }
            break;
    }

    return <button type={type} className={className} onClick={onClickHandler} disabled={disabled}>{children}</button>;
}

export default Button;