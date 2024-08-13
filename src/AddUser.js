import React from 'react';

export default class AddUser extends React.Component {

    constructor() {
        super();
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const username = event.target.elements.username.value;
        const email = event.target.elements.email.value;

        const user = {
            id: Number(new Date()),
            username: username,
            email: email
        }

        const users = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : [];
        users.push(user);

        localStorage.setItem("userInfo", JSON.stringify(users));
    }

    render() {
        return <>
            <h1 className='mt-2'>Add User Class component</h1>

            <div className='row'>
                <div className='col-xxl-6'>
                    <form onSubmit={this.handleSubmit}>
                        Username <input type="text" name="username" placeholder="Enter username" className='form-control' />
                        Email <input type="email" name="email" placeholder="Enter email" className='form-control' />
                        <input type="submit" className='btn btn-primary mt-2' value="Add User" />
                    </form>
                </div>
            </div>
        </>
    }
}