import React from "react";

function Project(props)
{
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
        <div  className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>        
            
            <h1 className="my-auto" >{props.name}</h1>
        </div>
        <p>{props.description}</p>
        </>
    )
}

export default Project;