import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

const UserList2 = () => {
    const [users1, setUser1] = useState([]); // users1 is empty array
    const [users2, setUser2] = useState([]); // users1 is empty array
    const [localUsers, setLocalUsers] = useState([]); // users1 is empty array
    const [users3, setUser3] = useState([]);

    /*
    
    Funcional component using useState
        users1 = []

    To udpate state we use setUser1 custom method name

    Class Component using this.state
        this.state = {
            users1: []    
        }
            
    To udpate state we use this.setState({})
    */

    useEffect(() => {
        fetch("http://localhost:4200/users", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                setUser1(result) // using setUser1 method to update users
            })
            .catch((error) => {
                console.log(error);
            })

        let userInfo = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : []
        setLocalUsers(userInfo);
    }, [])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET"
        })
            .then((response) => response.json())
            .then((result) => {
                setUser2(result) // using setUser1 method to update users
            })
            .catch((error) => {
                console.log(error);
            })

    }, [])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then((result) => {
                setUser3(result.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (<>

        <h1>Userlist Functional component - List of Albums - Using Axios Module</h1>
        <table className='table table-striped table-hover'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
                {
                    users3.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.title}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <h1>Userlist Funcional component - using localStorage</h1>
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
                    localUsers.map((user, index) => (
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
        <h1>Userlist Functional component - Own API</h1>
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
                    users1.map((user, index) => (
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

        <h1>Userlist Functional component - Other API</h1>
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
                    users2.map((user, index) => (
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

export default UserList2;