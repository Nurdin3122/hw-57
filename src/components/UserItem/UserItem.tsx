import React from 'react';
import {User} from "../../Type";

interface UserItemProps {
    user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
    return (
        <div className="card mb-3">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                <p className="card-text">
                    Роль: {user.role}<br />
                    Статус: {user.active ? 'Активен' : 'Неактивен'}
                </p>
            </div>
        </div>
    );
};

export default UserItem;
