import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {
                username: "",
                password: "",
                email: ""
            }
        }
    }

    handleSubmit = (event) => {
        event.preventDefault(); // do not refresh page
        alert("Form is submitted");
    }

    changeHandler = (event) => {
        let name = event.target.name; // username, password, email
        let value = event.target.value; // get username value, password value, email value
        let errors = this.state.errors;

        console.log({ name });
        console.log({ value });
        console.log({errors});

        switch (name) {
            case "username":
                errors.username = value.length < 5 ? "username must be 5 characters in length" : "";
                break;

            case "password":
                errors.password = value.length < 5 ? "password must be 5 characters in length" : "";
                break;

            case "email":
                errors.email = value.length < 5 ? "email must be 5 characters in length" : "";
                break;

            default:
                break;
        }
        this.setState({ errors, [name]: value }); // update state, component rerender
    }

    render() {
        const { errors } = this.state;
        return (<div className='m-4 col-xxl-6'>
            <form onSubmit={this.handleSubmit}>
                Enter Username <input className="form-control" type="text" placeholder="Enter username" name="username" onChange={this.changeHandler} />
                <p style={{ color: "red" }}>{errors.username}</p>

                Enter Password <input className="form-control" type="text" placeholder="Enter password" name="password" onChange={this.changeHandler} />
                <p style={{ color: "red" }}>{errors.password}</p>

                Enter Email <input className="form-control" type="text" placeholder="Enter email" name="email" onChange={this.changeHandler} />
                <p style={{ color: "red" }}>{errors.email}</p>
                <input type="submit" className='btn btn-primary' value="Register" />
            </form>
        </div>);
    }
}

export default Register;