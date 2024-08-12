import React from 'react';
import Welcome from './Welcome';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Product from './Product';
import Title from './Title';
import Header from './Header';
import Footer from './Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import UserList from './UserList';
import CoreBootstrap from './core-bootstrap/CoreBootstrap';

class Main extends React.Component {
    constructor(props) { // class component lifecycle
        super(props);
        // console.log(this.props); // debugging purpose
        /*
        {
            "usernameProps": "Ankita",
            "interestsProps": [
                "Badminton",
                "Basketball",
                "Volleyball",
                "Music"
            ],
            "birthProps": {
                "year": 2001,
                "place": "Pune"
            }
        }
        */
    }

    render() { // class component lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome username={this.props.usernameProps} />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/title" element={<Title username={this.props.usernameProps} />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/corebootstrap" element={<CoreBootstrap />} />
                </Route>
                <Route path="/login" element={<Login username={this.props.usernameProps}  />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    }
}

export default Main; // exporting component