import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Gsaps = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
      const cards = cardsRef.current.children;
  
      gsap.from(cards, {
        duration: 1,
        opacity: 0,
        y: 30,
        stagger: 0.2,
        ease: 'power3.out',
      });
    }, []);
  
    return (
      <div ref={cardsRef}>
        <div className="card">
          <h2>Card 1</h2>
          <p>This is the content of card 1.</p>
        </div>
        <div className="card">
          <h2>Card 2</h2>
          <p>This is the content of card 2.</p>
        </div>
        <div className="card">
          <h2>Card 3</h2>
          <p>This is the content of card 3.</p>
        </div>
      </div>
    );
  };

export default Gsaps;
