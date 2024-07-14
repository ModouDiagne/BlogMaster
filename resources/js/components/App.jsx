import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './UserList';
import UserCreate from './UserCreate';
import UserEdit from './UserEdit';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/users" component={UserList} />
                <Route path="/users/create" component={UserCreate} />
                <Route path="/users/:id/edit" component={UserEdit} />
            </Switch>
        </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
