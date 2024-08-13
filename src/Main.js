import React from 'react';
import Welcome from './Welcome';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Title from './Title';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Login from './Login';
import Register from './Register';
import UserList from './UserList';
import CoreBootstrap from './core-bootstrap/CoreBootstrap';
import SetLocalStorage from './core-bootstrap/SetLocalStorage';
import GetLocalStorage from './core-bootstrap/GetLocalStorage';
import NotFound from './NotFound';
import EditUser from './EditUser';
import UserList2 from './UserList2';

class Main extends React.Component {
    render() { // class component lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome username={this.props.usernameProps} />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/title" element={<Title username={this.props.usernameProps} />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users2" element={<UserList2 />} />
                    <Route path="/edituser/:id" element={<EditUser />} />
                    <Route path="/corebootstrap" element={<CoreBootstrap />} />
                    <Route path="/setlc" element={<SetLocalStorage />} />
                    <Route path="/getlc" element={<GetLocalStorage />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/login" element={<Login username={this.props.usernameProps} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    }
}

export default Main; // exporting component