import products from '../data/products';

const ProductReducer = (state = products, action) => { // update state based on action
    debugger
    switch (action.type) {
        case "REMOVE_PRODUCT":
            return [...state]; // write logic to remove product

        case "ADD_PRODUCT":
            return [...state, action.product];

        case "LOAD_PRODUCTS":
            return [...state];

        default:
            return state;
    }
}

export default ProductReducer;