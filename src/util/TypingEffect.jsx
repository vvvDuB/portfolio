import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const TypingEffect = ({ text }) => {
  const textRef = useRef(null); // Riferimento al contenitore per animare il testo

  useEffect(() => {
    const letters = text.split('').map((letter, index) => (
      <span key={index} style={{ opacity: 0 }}>{letter}</span>
    ));

    // Avviamo l'animazione con GSAP
    gsap.fromTo(
      textRef.current.children, // Riferimento ai singoli <span> lettera per lettera
      { opacity: 0 }, // Stato iniziale: opacità 0 per ogni lettera
      {
        opacity: 1, // Stato finale: opacità 1 per ogni lettera
        duration: 0.1, // Durata di ogni lettera
        stagger: 0.1, // Ritardo tra una lettera e l'altra
        ease: 'none' // Nessuna easing per un effetto più "bruto"
      }
    );
  }, [text]);

  return (
    <div ref={textRef} style={{ fontFamily: 'monospace', fontSize: '24px' }}>
      {text.split('').map((letter, index) => (
        <span key={index} style={{ opacity: 0 }}>{letter}</span>
      ))}
    </div>
  );
};

export default TypingEffect;