import React from 'react';
import "./welcome.css";
import styles from './title.module.css';

export default class Welcome extends React.Component {

    render() { // lifecycle
        let style = {
            backgroundColor: "orange",
            color: "white"
        };
        return <div>
            <h1 style={{ backgroundColor: "blue", color: "white" }}>This is Welcome Class Component - Inline CSS Example</h1>
            <h1 style={style}>Programming with Harsh - CSS in a variable</h1>
            <h1 className="message">Programming with Harsh - External CSS</h1>
            <h1 className="header">Swaroop - NO CSS HERE</h1>
            <h1 className={styles.header}>Swaroop - CSS HERE</h1>
        </div>
    }
}
