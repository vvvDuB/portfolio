import { useEffect, useRef } from "react";
import gsap from "gsap";

const TypingEffect = ({ text, fontSize }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const appearanceDuration = 1;
    const delayDuration = 3;
    const disappearanceDuration = 1;
    const letterCount = text.length;
    const staggerDuration = appearanceDuration / letterCount;

    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0 });

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

    timeline.to({}, { duration: delayDuration });

    timeline.to(textRef.current.children, {
      opacity: 0,
      duration: staggerDuration,
      stagger: staggerDuration,
      ease: "none",
    });
  }, [text]);

  return (
    <div ref={textRef} style={{ fontFamily: "monospace", fontSize: fontSize }}>
      {text.split("").map((letter, index) => (
        <span key={index} style={{ opacity: 0 }}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TypingEffect;
