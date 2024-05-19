import React from "react";
import Project from "./Project";
import { Card } from "react-bootstrap";


function CardFade(props){

    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();
    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
    }, []);

    return(
        <>
        <div  className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef} >
            <div class="centerise" > <div> <Card style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'}}>
                <img alt="no image" variant="top" src={props.image} height={window.innerWidth<790?'75px':"250px"} />
                <Project description={props.text} />
            </Card></div></div>
        </div>
        </>
    )
}

export default CardFade;