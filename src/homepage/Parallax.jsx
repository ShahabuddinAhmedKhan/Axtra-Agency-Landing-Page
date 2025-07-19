import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Dummy components
const Parallax = () => {
  return (
    <div style={{ flex: "none", width: "100vw", height: "100vh", background: "lightblue" }}>
      <h1>Why Choose Us?</h1>
      <p>Some text about why choose us...</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div style={{ flex: "none", width: "100vw", height: "100vh", background: "lightcoral" }}>
      <h1>Stats</h1>
      <p>Some stats data here...</p>
    </div>
  );
};

const Featured = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Horizontal scroll effect for carousel container
    gsap.to(".carousel", {
      xPercent: -100 * (2 - 1), // Move to the last section (2 items in this case)
      ease: "none", // Linear movement
      scrollTrigger: {
        trigger: ".carousel-container", // The trigger element is the carousel container
        pin: true, // Pin the container while scrolling
        scrub: true, // Smooth scroll effect linked to the scroll position
        start: "top top", // Start when the top of the carousel container hits the top of the viewport
        end: `+=${window.innerHeight * 2}`, // End after scrolling through all images
        markers: false, // Disable debugging markers
      },
    });
  }, []);

  return (
    <div>
      <div className="carousel-container" style={{ height: "100vh", overflow: "hidden" }}>
        <div
          className="carousel"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "100%",
          }}
        >
          {/* Add the components inside the carousel */}
          <WhyChooseUs />
          <Stats />
        </div>
      </div>
    </div>
  );
};

export default Parallax;