import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserEdit = ({ match }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        admin: false
    });

    useEffect(() => {
        axios.get(`/users/${match.params.id}`)
            .then(response => {
                setFormData({
                    name: response.data.name,
                    email: response.data.email,
                    admin: response.data.admin
                });
            });
    }, [match.params.id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`/users/${match.params.id}`, formData)
            .then(response => {
                window.location.href = '/users';
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Edit User</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin">Admin</label>
                    <input
                        type="checkbox"
                        name="admin"
                        checked={formData.admin}
                        onChange={() => setFormData({ ...formData, admin: !formData.admin })}
                        className="mr-2 leading-tight"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UserEdit;
