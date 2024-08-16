import React from "react";
import "./addproduct.scss";
import styles from './addproduct.module.scss';
import { Navigate } from "react-router-dom";
import { addProduct } from './Redux/actions'; // importing actions

class AddProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    goToProducts = () => {
        this.setState({ // update state, component rerender
            redirect: true
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // stop page refresh
        const productName = event.target.elements.productName.value;
        const imageUrl = event.target.elements.imageUrl.value;
        const productCode = event.target.elements.productCode.value;
        const releaseDate = event.target.elements.releaseDate.value;
        const description = event.target.elements.description.value;
        const price = event.target.elements.price.value;
        const starRating = event.target.elements.starRating.value;

        const product = {
            id: Number(new Date()),
            productName: productName,
            imageUrl: imageUrl,
            productCode: productCode,
            releaseDate: releaseDate,
            description: description,
            price: price,
            starRating: starRating
        }

        this.props.dispatch(addProduct(product));

        this.setState({
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

            <h1>Add Product Detail</h1>
            <div className="col-xxl-6">
                <form onSubmit={this.handleSubmit}>
                    Product Name <input type="text" name="productName" placeholder="Enter Productname" className='form-control' />
                    Image Url <input type="text" name="imageUrl" placeholder="Enter Productname" className='form-control' />
                    Product Code <input type="text" name="productCode" placeholder="Enter Product Code" className='form-control' />
                    Date <input type="date" name="releaseDate" placeholder="Enter Product Code" className='form-control' />
                    Description <input type="text" name="description" placeholder="Enter Description" className='form-control' />
                    Price <input type="text" name="price" placeholder="Enter Price" className='form-control' />
                    Rating <input type="text" name="starRating" placeholder="Enter rating" className='form-control' />
                    <button className="btn btn-primary mt-2">Add Product</button>
                </form>
            </div>

            <h1 className="headerTag">This is Add Product Class Component</h1>
            <h1 className={styles.headerTag}>This is Add Product Class Component - SCSS Module</h1>
            <button className="btn btn-primary" onClick={this.goToProducts}>Go to Products</button>
        </>
    }
}

export default AddProduct; // exporting default module