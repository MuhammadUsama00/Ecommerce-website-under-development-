import React from 'react'
import Product from '../components/Product'
import {Row,Col} from 'react-bootstrap'
import { useState,useEffect } from 'react'
const HomeScreen = () => {
    const[products,setProducts]=useState([])
    const[error,setError]=useState(null)
    const[loading,setLoading]=useState(true)
    useEffect(() =>{
        // fetch("http://localhost:5000/api/products")
        // .then((res) =>{
        //     return res.json();
        // })
        // .then((data) =>{
        //     console.log(data)
        //     setProducts(data);
        //     setLoading(false);
        //     setError(null);
        // })
        // .catch((err) =>{
        //     console.log(err);
        //     setError("Some thing bad happen");
        //     setLoading(false);
        // })
        let fetchProduccts= async() =>{
            try {
                let res=await fetch("/api/products")
                let data= await res.json()
                setProducts(data);
                setLoading(false);
                setError(null);
            } catch (error) {
                console.log(error);
                setError("Some thing bad happen");
                setLoading(false);
                setProducts([]);
            }
        }
        fetchProduccts();
    },[])
    return (
       <>
       <h3 className='my-3 fw-bold'>Latest: Products</h3>
       <Row>
       {error && error}
        {loading && <h1>Loading ....</h1>}
       {products.map((product)=>(
           <Col xl={3} lg={4} md={6} key={product._id} className='my-2'>
           <Product product={product}/>
           </Col>
       ))}
       </Row>
       </>
    )
}

export default HomeScreen
