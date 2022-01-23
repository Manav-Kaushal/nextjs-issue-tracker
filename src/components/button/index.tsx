import React from "react";

export type IButton = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

export const Button: React.FC<IButton> = ({
    className = "",
    children,
    ...rest
}) => {
    return (
        <button
            className={`py-2 px-4 rounded bg-purple-600 transition duration-300 ease-in-out hover:bg-purple-800 focus:outline-none text-white text-lg outline-none ${className}`}
            {...rest}
        >
            {children}
        </button>
    );
};
