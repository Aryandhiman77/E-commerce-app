import React, { Component, useRef } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ReactImageMagnify from 'react-image-magnify';


const ReactCarousel = (props) => {
    if(!props.images){
        return <h1>No images.</h1>
    }
    
  return (
    <div style={props.style}>
     

{/* <img style={{height:"100px",width:"200px",position:'absolute',zIndex:5}} ref={ref} src="https://images.vexels.com/content/157944/preview/dots-grid-design-37d7ed.png" alt="" /> */}

      <Carousel showThumbs={props.showThumbs} autoPlay={props.autoPlay} infiniteLoop={props.infiniteLoop} transitionTime={props.transitionTime} swipeable={props.swipeable} axis={props.axis} thumbWidth={60} dynamicHeight={80} showIndicators={false} showArrows={props.showArrows} showStatus={false}>
    
     {props.images.map((image,i)=>{
        return <div key={i} >
         {!props.magnifier?<img  src={image} alt='loading' />
       : <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: image
    },
    largeImage: {
        src: image,
        width: 800,
        height: 800
    },
    enlargedImagePosition:'over'
}} />}

    </div>


    
     })
     }
    
            </Carousel>
    </div>
  )
}

export default ReactCarousel


// ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'))