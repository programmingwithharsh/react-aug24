import React from "react";
import "./addproduct.scss";
import styles from './addproduct.module.scss';

class AddProduct extends React.Component {
    render() {
        return <>
        <h1 className="headerTag">This is Add Product Class Component</h1>
        <h1 className={styles.headerTag}>This is Add Product Class Component - SCSS Module</h1>
        </>
    }
}

export default AddProduct; // exporting default module