import React from 'react';
import ReactDOM from 'react-dom/client';
import UserList from './components/UserList';
import UserCreate from './components/UserCreate';
import UserEdit from './components/UserEdit';

import '../css/app.css'; 

const root = ReactDOM.createRoot(document.getElementById('app'));

const pathname = window.location.pathname;

if (pathname === '/users/create') {
    root.render(<UserCreate />);
} else if (pathname.includes('/users/') && pathname.includes('/edit')) {
    const id = pathname.split('/')[2];
    root.render(<UserEdit id={id} />);
} else {
    root.render(<UserList />);
}
