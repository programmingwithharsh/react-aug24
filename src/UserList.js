import React from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class UserList extends React.Component {
    constructor() { // lifecycle 1
        super();
        console.log("constructor");
        this.state = {
            users1: [], // initially no users
            users2: [],
            localUsers: [],
            users3: []
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
                console.log("Using Fetch Method API Response is", result);
                this.setState({ // updating state, whenever state update component rerender
                    users2: result
                })
            })
            .catch((error) => {
                console.log(error);
            })

        this.setState({
            localUsers: localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
        })

        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((result) => {
                this.setState({ // updating state, whenever state update component rerender
                    users3: result.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    shouldComponentUpdate() { // lifecycle
        return true; // we can update component
    }

    render() { // lifecycle 2
        console.log("render");
        return (<>

            <h1>Userlist Class component - List of Albums - Using Axios Module</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.users3.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <h1>Userlist Class component - using localStorage</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.localUsers.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Link to={`/edituser/${user.id}`}>Edit</Link> |
                                    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
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
            <h1>Userlist Class component - Own API</h1>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
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
                                    <Link to={`/edituser/${user.id}`}>Edit</Link> |
                                    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                        Delete
                                    </button>
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

            <h1>Userlist Class component - Other API</h1>
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

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Confirm User Deletion</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Are you sure?
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">OK</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>);
    }
}

export default UserList;