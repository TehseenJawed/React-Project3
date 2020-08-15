import React, {useContext, useState} from 'react';
import {TransactionContext} from "./../service/Context";
import {Image, Container, Row, Col, Button} from 'react-bootstrap';
export default function Cart(){
    let {transactions, Delete_from_cart} = useContext(TransactionContext);
    
    return(
        <div className="cart-page">
                 <h1>ADD TO CART</h1>
                 <div  className='borderr'>
{transactions.map((item,ind) =>{
     
    return(
        
        <Row className='borderr_bg'>
        <Col xs={3}><Image className='images' src={item.img} /></Col>
        <Col xs={3} className="txts mt-3">{item.name}</Col>
        <Col xs={3} className="txts price mt-3">{item.price}</Col>
        <Col xs={3} className="txts price mt-2"><Button onClick={() => Delete_from_cart(item.id)} variant="danger">Remove Product</Button></Col>
    </Row>
    )
    })}
    </div>
        </div>
    )
}