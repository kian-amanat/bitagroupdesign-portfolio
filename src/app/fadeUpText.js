import { useEffect, useRef } from "react";
import "./main.css"; // Assuming your styles are here

const FadeUpText = ({ children }) => {
  const textRef = useRef(null); // Create a reference to the text element

  useEffect(() => {
    // Create an intersection observer instance
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // If the element is in view, add the fade-up class
          entry.target.classList.add("fade-up");
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is in view
      }
    );

    // Start observing the target element
    if (textRef.current) {
      observer.observe(textRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <div ref={textRef} className="fade-up-container">
      {children}
    </div>
  );
};

export default FadeUpText;
