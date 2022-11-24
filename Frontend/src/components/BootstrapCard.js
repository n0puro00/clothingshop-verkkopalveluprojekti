import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from "react-bootstrap";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const BootstrapCard = () => {

    const cardInfo = [

    ];

    const renderCard = (card, index) => {
        return (
          
            <Card style={{ width: '18rem' }} key={index} className="">

            <Card.Body>
            <Card.Link className='' href="#">
            <Card.Img variant="top" src={card.image}/>
              <Card.Title>{card.title}</Card.Title>
              <Card.Text>
                {card.text}
              </Card.Text>
          
              </Card.Link>
           <div >
              <Button variant="primary">    <FontAwesomeIcon icon={faCartShopping} />   </Button>
              <Card.Text className=''>
                  {card.price}
              </Card.Text>
              </div>        

            </Card.Body>
          </Card>
          
        )
    }

    return (
      <Container>
        <div className=''>
            {cardInfo.map(renderCard)}
        </div>
        </Container>
    )

    

    };

    export default BootstrapCard;