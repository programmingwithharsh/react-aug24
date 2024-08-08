import React from 'react';
import Welcome from './Welcome';
import AddProduct from './AddProduct';
import ProductList from './ProductList';
import Product from './Product';
import Title from './Title';
import Header from './Header';
import Footer from './Footer';

class Main extends React.Component {
    render() { // class component lifecycle
        return <div>
            <h1>This is Main Class Component</h1>
            <Welcome />
            <AddProduct />
            <ProductList />
            <Product />
            <Title />
            <Header />
            <Footer />
        </div>
    }
}

export default Main; // exporting component