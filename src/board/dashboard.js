import React, { useState, useEffect } from 'react';
import axios from'axios';
import './dashboard.css';

const Dashboard = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://fakestoreapi.com/products')
            .then(response => {
                console.log(response.data)
                setIsLoaded(true);
                setItems(response.data)
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            });
            
    }, []);
  return (
    <>
      <div className="page_d">
        
        <div className="products_section">
          {items.map((product) => (

            <div className="product_grid" key={product.id}>
              <div className="grid">
                <div className="header">
                  <h1 className="category" >
                    {product.category}
                  </h1>
                  <h4 className="title">
                    {product.title}
                  </h4>
                </div>
                <div
                className="description"
                style={{
                    borderWidth: 1,
                }}
                >
                    <div className='desc'>Description:  </div>
                    <span className='d'>{product.description}</span>
                    <img src={product.image} height="30%" width="30%" className='image'></img>
                </div>
                <div className="buttom">
                  <span className="rate">Rate: {product.rating.rate} ⭐</span>
                  <span className="price">Price: {product.price} $</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
