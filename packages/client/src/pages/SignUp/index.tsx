import React from "react";
import { useAuthStore } from "../../entities/auth";

export const SingUp: React.FC<object> = () => {
    const signUp = useAuthStore((state) => state.signUp);

    return <div>SingUp:</div>;
};
