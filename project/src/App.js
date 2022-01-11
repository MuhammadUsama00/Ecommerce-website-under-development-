import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route,Routes } from 'react-router-dom'
import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
const App = () => {
  return (
    <>
    <Header/>
    <main className='main-view'>
    <Container>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
      </Routes>
    </Container>
    </main>
    <Footer/>
    </>
  )
}

export default App

