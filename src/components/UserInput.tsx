import React, { ForwardedRef, forwardRef } from "react";

type Props = {
    value: string;
    handleChange: React.ChangeEventHandler<HTMLInputElement>;
};

export const UserInput = forwardRef(
    ({ value, handleChange }: Props, ref: ForwardedRef<HTMLInputElement | null>) => {
        return <input type="text" value={value} onChange={handleChange} ref={ref} />;
    }
);
