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

class Main extends React.Component {
    render() { // class component lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/addproduct" element={<AddProduct />} />
                    <Route path="/title" element={<Title />} />
                </Route>
            </Routes>
        </BrowserRouter>
    }
}

export default Main; // exporting component