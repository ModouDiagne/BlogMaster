import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserEdit = ({ match }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [admin, setAdmin] = useState(false);

    useEffect(() => {
        axios.get(`/api/users/${match.params.id}`).then(response => {
            const user = response.data;
            setName(user.name);
            setEmail(user.email);
            setAdmin(user.admin);
        });
    }, [match.params.id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/api/users/${match.params.id}`, {
            name,
            email,
            password,
            password_confirmation: passwordConfirmation,
            admin,
        }).then(response => {
            window.location.href = '/users';
        });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirmation">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="password_confirmation"
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        <input
                            type="checkbox"
                            checked={admin}
                            onChange={(e) => setAdmin(e.target.checked)}
                            className="mr-2 leading-tight"
                        />
                        Admin
                    </label>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update User
                    </button>
                </div>
            </form>
        </div>
    );
}

export default UserEdit;
