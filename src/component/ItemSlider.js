import React, {useState} from 'react';
import {Carousel, } from 'react-bootstrap';
import bg1 from './../img/bg1.jpg';
import bg2 from './../img/bg2.jpg';
import bg3 from './../img/bg3.jpg';

export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h2>Safe Online Transaction With Your Credit Card</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h2>Shop the high quality products that our seller is offering from world</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bg3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h2>Easy to contact the world best sellers on Shopping</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
//   render(<ControlledCarousel />);