import React from 'react';
import Slide from 'react-reveal/Slide'
import makeCarousel from 'react-reveal/makeCarousel'

import { Container, Arrow, Image, Wrapper, Dot, Dots, Children, Overlay, Title } from "./components/styles"

import img1 from "./imgs/black-4572125_1920.jpg"
import img2 from "./imgs/blue-2564660_1920.jpg"
import img3 from "./imgs/girl-1828536_1920.jpg"
import img4 from "./imgs/model-600225_1920.jpg"
import img5 from "./imgs/people-2591867_1920.jpg"
import img6 from "./imgs/person-731142_1920.jpg"

function App() {

  document.getElementById('root').style.height = '100vh'
  document.getElementById('root').style.backgroundColor = '#333'
  document.getElementsByTagName('body')[0].style.margin = '0'

  const imgs = [
    img5,
    img2,
    img3,
    img4,
    img1,
    img6
  ]
  const CarouselUI = ({ position, handleClick, children, total }) => (
    <Container>
      <Children>
        {children}
        <Arrow onClick={handleClick} data-position={position - 1}><i class="fas fa-chevron-circle-left"></i></Arrow>
        <Arrow right onClick={handleClick} data-position={position + 1}><i class="fas fa-chevron-circle-right"></i></Arrow>
      </Children>
      
      <Dots>
        {Array(...Array(total)).map( (val, index) =>
          <Dot key={index} onClick={handleClick} data-position={index}>
            {index === position ? '● ' : '○ ' }
          </Dot>
        )}
      </Dots>
    </Container>
  );
  const Carousel = makeCarousel(CarouselUI);

  return (
    <Wrapper>
      <Slide right><Title>React Slider</Title></Slide>
      <Carousel defaultWait={0}>
        {imgs.map((data, i) => {
            return(
                <Slide right key={i} >
                  <Image className="img" style={{ backgroundImage: `url(${data})` }} >
                      <Overlay className="img-overlay"/>
                  </Image>
                </Slide>
            )
            }
          )
        }
      </Carousel>
    </Wrapper>
  );
}

export default App;
