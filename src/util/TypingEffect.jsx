import { useEffect, useRef } from "react";
import gsap from "gsap";

const TypingEffect = ({ text }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const appearanceDuration = 1; // Durata dell'apparizione in secondi
    const delayDuration = 3; // Pausa prima della scomparsa
    // eslint-disable-next-line no-unused-vars
    const disappearanceDuration = 1; // Durata della scomparsa in secondi
    const letterCount = text.length;
    const staggerDuration = appearanceDuration / letterCount; // Tempo per ogni lettera

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    // Fase di apparizione
    timeline.fromTo(
      textRef.current.children,
      { opacity: 0 },
      {
        opacity: 1,
        duration: staggerDuration,
        stagger: staggerDuration,
        ease: "none",
      }
    );

    // Pausa di 3 secondi
    timeline.to({}, { duration: delayDuration }); // Delay senza cambiare niente

    // Fase di scomparsa
    timeline.to(textRef.current.children, {
      opacity: 0,
      duration: staggerDuration,
      stagger: staggerDuration,
      ease: "none",
    });
  }, [text]);

  return (
    <div ref={textRef} style={{ fontFamily: "monospace", fontSize: "24px" }}>
      {text.split("").map((letter, index) => (
        <span key={index} style={{ opacity: 0 }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
