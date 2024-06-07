import { User, UserMutation } from "../../Type";
import React, { useState } from "react";

interface Props {
    onSubmit: (user: User) => void;
}

const UserForm: React.FC<Props> = ({ onSubmit }) => {
    const [userMutation, setUserMutation] = useState<UserMutation>({
        name: '',
        email: '',
        active: false,
        role: 'user',
    });

    const handleTextInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = event.target;
        setUserMutation(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setUserMutation(prevState => ({
            ...prevState,
            [name]: checked,
        }));
    };

    const onFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSubmit({
            id: Math.random().toString(),
            ...userMutation,
        });
        setUserMutation({
            name: '',
            email: '',
            active: false,
            role: 'user',
        });
    };

    return (
        <form onSubmit={onFormSubmit}>
            <h4>Add new user</h4>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    onChange={handleTextInputChange}
                    value={userMutation.name}
                />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    onChange={handleTextInputChange}
                    value={userMutation.email}
                />
            </div>

            <div className="form-group">
                <label htmlFor="role">Role</label>
                <select
                    name="role"
                    id="role"
                    className="form-control"
                    onChange={handleTextInputChange}
                    value={userMutation.role}
                >
                    <option value="user">User</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Admin</option>
                </select>
            </div>

            <div className="form-group form-check">
                <input
                    type="checkbox"
                    name="active"
                    id="active"
                    className="form-check-input"
                    onChange={handleCheckboxChange}
                    checked={userMutation.active}
                />
                <label className="form-check-label" htmlFor="active">Active</label>
            </div>

            <button type="submit" className="btn btn-primary mt-2">Create</button>
        </form>
    );
};

export default UserForm;
