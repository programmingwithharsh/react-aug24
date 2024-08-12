import React from 'react';

class UserList extends React.Component {
    constructor() { // lifecycle 1
        super();
        console.log("constructor");
        this.state = {
            users1: [], // initially no users
            users2: []
        }
    }

    componentDidMount() { // call after render method, lifecycle 3
        console.log("componentDidMount");
        fetch("http://localhost:4200/users", { // Javascript fetch method we can do API call
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({ // updating state, whenever state update component rerender
                    users1: result
                })
            })
            .catch((error) => {
                console.log(error);
            })

        fetch("https://jsonplaceholder.typicode.com/users", { // Javascript fetch method we can do API call
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                this.setState({ // updating state, whenever state update component rerender
                    users2: result
                })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    shouldComponentUpdate() { // lifecycle
        return true; // we can update component
    }

    render() { // lifecycle 2
        console.log("render");
        return (<>
            <h1>Userlist class component - Own API</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users1.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <span className='fa fa-star'></span>
                                    <span className='fa fa-star'></span>
                                    <span className='fa fa-star'></span>
                                    <span className='fa fa-star'></span>
                                    <span className='fa fa-star'></span>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1>Userlist class component - Other API</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users2.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>);
    }
}

export default UserList;