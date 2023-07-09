import React, { useState } from "react";
import { MOCK_USERS } from "../data/users";

type Props = {};

export const UsersList = (props: Props) => {
    const [users, setState] = useState(MOCK_USERS);

    return (
        <>
            <div>UsersList</div>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.id} {user.name}
                    </li>
                ))}
            </ul>
        </>
    );
};
