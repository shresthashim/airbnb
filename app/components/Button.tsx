import {IconType} from "react-icons";

interface ButtonProps {
    label: string;
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void;
disabled?: boolean;
outline?: boolean;
small?: boolean;
icon?: IconType;
}

import React from 'react';

const Button = () => {
    return (
        <div>
            
        </div>
    );
};

export default Button;