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
import SetLocalStorage from './localstorage/SetLocalStorage';
import GetLocalStorage from './localstorage/GetLocalStorage';
import NotFound from './NotFound';
import EditUser from './EditUser';
import UserList2 from './UserList2';
import AddUser from './AddUser';
import ReactBootstrap from './react-bootstrap/ReactBootstrap';
import { loadProducts } from './Redux/actions'; // importing actions

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                    "productId": 1,
                    "productName": "Leaf Rake - State",
                    "productCode": "GDN-0011",
                    "releaseDate": "March 19, 2016",
                    "description": "Leaf rake with 48-inch wooden handle.",
                    "price": 19.95,
                    "starRating": 3.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
                },
                {
                    "productId": 2,
                    "productName": "Garden Cart",
                    "productCode": "GDN-0023",
                    "releaseDate": "March 18, 2016",
                    "description": "15 gallon capacity rolling garden cart",
                    "price": 32.99,
                    "starRating": 4.2,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
                },
                {
                    "productId": 3,
                    "productName": "Hammer",
                    "productCode": "TBX-0048",
                    "releaseDate": "May 21, 2016",
                    "description": "Curved claw steel hammer",
                    "price": 8.9,
                    "starRating": 4.8,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
                },
                {
                    "productId": 4,
                    "productName": "Saw",
                    "productCode": "TBX-0022",
                    "releaseDate": "May 15, 2016",
                    "description": "15-inch steel blade hand saw",
                    "price": 11.55,
                    "starRating": 3.7,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
                },
                {
                    "productId": 5,
                    "productName": "Video Game Controller",
                    "productCode": "GMG-0042",
                    "releaseDate": "October 15, 2015",
                    "description": "Standard two-button video game controller",
                    "price": 35.95,
                    "starRating": 4.6,
                    "imageUrl": "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
                }
            ]
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.dispatch(loadProducts()); // calling loadProducts action
    }

    render() { // class component lifecycle
        return <BrowserRouter>
            <Routes>
                <Route path="/" element={<Nav />}>
                    <Route index element={<Welcome username={this.props.usernameProps} />} />
                    <Route path="/products" element={<ProductList {...this.props} />} />
                    <Route path="/addproduct" element={<AddProduct  {...this.props} />} />
                    <Route path="/title" element={<Title username={this.props.usernameProps} />} />
                    <Route path="/users" element={<UserList />} />
                    <Route path="/users2" element={<UserList2 />} />
                    <Route path="/edituser/:id" element={<EditUser />} />
                    <Route path="/adduser" element={<AddUser />} />
                    <Route path="/corebootstrap" element={<CoreBootstrap />} />
                    <Route path="/reactbootstrap" element={<ReactBootstrap />} />
                    <Route path="/setlc" element={<SetLocalStorage />} />
                    <Route path="/getlc" element={<GetLocalStorage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
                <Route path="/login" element={<Login username={this.props.usernameProps} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    }
}

export default Main; // exporting component