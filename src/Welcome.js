import React from 'react';
import "./welcome.css";
import styles from './title.module.css';

export default class Welcome extends React.Component {
    constructor() { // lifecycle
        super();
        this.state = {
            username: "Sushant",
            address: "Mumbai"
        }
        console.log("1 constructor lifecyle");
    }

    updateUsername = () => {
        this.setState({ // setState method is predefined, To update state we use this.setState, whenever state update component rerender
            username: "Ankita"
        })
    }

    updateAddress = () => {
        this.setState({
            address: "Delhi"
        })
    }

    updateAllDetails = () => {
        this.setState({
            username: "Ankita",
            address: "Delhi"
        })
    }

    render() { // lifecycle
        console.log("2 render lifecyle");
        let style = {
            backgroundColor: "orange",
            color: "white"
        };
        return <div>
            <h1>State username is {this.state.username} and address is {this.state.address}</h1>
            <button onClick={this.updateUsername} className='btn btn-primary'>Update Username</button><hr />
            <button onClick={this.updateAddress} className='btn btn-primary'>Update Address</button><hr />
            <button onClick={this.updateAllDetails} className='btn btn-primary'>Update All Details</button>
            <hr />
            <h3 style={{ backgroundColor: "blue", color: "white" }}>This is Welcome Class Component - Inline CSS Example</h3>
            <h3 style={style}>Programming with Harsh - CSS in a variable</h3>
            <h3 className="message">Programming with Harsh - External CSS</h3>
            <h3 className="header">Swaroop - NO CSS HERE</h3>
            <h3 className={styles.header}>Swaroop - CSS HERE</h3>
        </div>
    }
}
