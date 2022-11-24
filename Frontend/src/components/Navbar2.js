import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import React,{useState,useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Cart from "./Cart";

export default function Navbar2({url,cart}) {

    return (
<div className='fixed-top Navbar2 ms-auto ' >
<Navbar className='fixed-top '/>
<Container className="col">
  <Navbar className='Navbar2' expand="lg" variant="light" bg="light">
      <Navbar.Brand href="/Home"><FontAwesomeIcon icon={faHome} />  </Navbar.Brand>
      
      <Navbar.Brand cart={cart} href="/Ostoskori"> 
      <FontAwesomeIcon icon={faCartShopping}/>  
      </Navbar.Brand>
      <Cart cart={cart}></Cart>
  </Navbar>
      
</Container>
</div>
    )
}