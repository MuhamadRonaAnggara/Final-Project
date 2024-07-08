import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Popup from '../../../Smartphone/Final-Project/ReactTailwind/src/components/Popup/Popup';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [orderPopup, setOrderPopup] = useState(false);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:9000/api/v1/order', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProducts(response.data.data);
        } catch (error) {
            console.error('Error fetching products', error);
        }
    };

    return (
        <div className="product-container">
            <h2>Products</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Type</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.email}</td>
                            <td>{product.address}</td>
                            <td>{product.type}</td>
                            <td>{product.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} fetchProducts={fetchProducts} />
        </div>
    );
};

export default Product;
