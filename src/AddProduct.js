import React from "react";
import "./addproduct.scss";
import styles from './addproduct.module.scss';
import { Navigate } from "react-router-dom";

class AddProduct extends React.Component {
    constructor() {
        super();
        this.state = {
            redirect: false
        }
    }

    goToProducts = () => {
        this.setState({ // update state, component rerender
            redirect: true
        })
    }

    render() {
        const { redirect } = this.state;
        return <>
            {
                redirect && (
                    <Navigate to="/products" />
                )
            }
            <h1 className="headerTag">This is Add Product Class Component</h1>
            <h1 className={styles.headerTag}>This is Add Product Class Component - SCSS Module</h1>
            <button className="btn btn-primary" onClick={this.goToProducts}>Go to Products</button>
        </>
    }
}

export default AddProduct; // exporting default module