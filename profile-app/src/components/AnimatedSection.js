// AnimatedSection.js

import { useInView } from "react-intersection-observer";

const AnimatedSection = ({
  children,
  duration = 1000,
  delay = 200,
  easing = "ease-out",
  parallax = 0.5, // new prop for parallax effect
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const transformValue = inView
    ? `translateY(0px)`
    : `translateY(${parallax * 50}px)`;

  return (
    <div
      ref={ref}
      style={{
        transform: transformValue,
        transition: `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`,
      }}
      className={`transform ${inView ? "opacity-100" : "opacity-0"}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
