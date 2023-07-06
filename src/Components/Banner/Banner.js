
import React from 'react';
import bg1 from '../../assets/bg7.png';
import bg2 from '../../assets/bglight.png';
import { Button } from 'reactstrap';
import './Banner.css';
import {
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from 'reactstrap';
import TypingText from '../TypeEffect/TypingText';

function Banner() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const items = [
    {
      src: bg1,
      content: (
        <div className='makeToTop'>
          <h3 className='makeToTopHeading'>
            <TypingText text='MOSASTICK TECHNOLOGIES' speed={100} />
          </h3>

        </div>
      ),
    },
    {
      src: bg2,
      content: (
        <div className='makeToTopWhite'>
			<h3 className='makeToTopHeadingDark'>
          <TypingText text='MOSASTICK TECHNOLOGIES' speed={100} />
          </h3>
		  

        </div>
      ),
    },
  ];

  const itemLength = items.length - 1;

  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img className='imagesize' src={item.src} alt={item.altText} />
        <div className='carousel-caption'>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div style={{ display: 'block' }}>
      
      <Carousel
        previous={previousButton}
        next={nextButton}
        activeIndex={activeIndex}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={(newIndex) => {
            if (animating) return;
            setActiveIndex(newIndex);
          }}
        />
        {carouselItemData}
      </Carousel>
    </div>
  );
}

export default Banner;
