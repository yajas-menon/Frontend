import React from 'react'
import Product4 from '../../assets/images/pic4.jpeg';
import Footer from '../../components/Footer/Footer';
import { useNavigate, Link } from 'react-router-dom';
import pic from '../../assets/images/pic.jpeg';
import axios from 'axios';
import { useState,useEffect } from 'react';
import './Products2.css'
const Pic4 = () => {
    let a=localStorage.getItem('product');
    const [products,setProducts]=useState([]);
       useEffect(()=>{
            axios.get('https://backend-f463i88db-yajas-menon.vercel.app/api/user/getProducts').then(res=>{
            // console.log(res.data.data);
            setProducts(res.data.data);
            console.log(products);
        }).catch(err =>{
            console.log(err);
        })
       })
  return (
    <div>
        <div class="wrapper">
                <div class="logo">
                    <a href="index.html"><img src={pic} alt="" /></a>
                </div>
                <ul class="menu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/Products">Products</Link></li>

                    <li><Link to="/contactUs">Contact</Link></li>
                </ul>
            </div>
            <div class="small-container single-products">
    <div class="row">
    {
            products && products?.map((item,key) =>{

                if(item.Product_name===a){
                return (
                    <div className='row'>
                    <h1>Hello</h1>
                    <div className="col-2">
            <img src={Product4} width="100%" id="ProductImg" />
        </div>
        <div className="col-2">
            <h1>{item?.Product_name}</h1>
            <h4>Rs {item?.Price}/Kg + Taxes </h4>
            <h4>{item?.Availability}</h4>
            <p></p>
            <Link to="/contactUs" className="btn">Enquire Now</Link>
            <h3>Product Details<i className="fa fa-indent"></i></h3>
            <br/>
            <p>{item?.Description}</p>
        </div>
        </div>
                );
                }
            })
        }
    </div>
</div>
<Footer/>
</div>
  )
}

export default Pic4;