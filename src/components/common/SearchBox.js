import React, { Component } from 'react'
import SearchBar from './auto-complete/SearchBar';
import User from '../user/User';

export default class SearchBox extends Component {
    state = {
        options: [],
        selectedUser: {}
    }
    componentDidMount() {
        this.getUsers();
    }

    getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(result => this.setState({ options: result }));
    }

    updateSelectedUser = (selectedUser) => {
        this.setState({ selectedUser })
    }

    render() {
        return (
            <div>
                <SearchBar options={this.state.options} updateSelectedUser={this.updateSelectedUser} />
                {Object.keys(this.state.selectedUser).length > 0 && <User user={this.state.selectedUser} />}
            </div>
        )
    }
}
