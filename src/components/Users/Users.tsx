import React from 'react';
import {User} from "../../Type";
import UserItem from "../UserItem/UserItem";

interface Props {
    users: User[];
}

const Users: React.FC<Props> = ({ users }) => {
    return (
        <>
            <h4>Users</h4>
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
};

export default Users;
