import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import "./styles.css";
import WhyChooseUs from "./WhyChooseUs";
import Stats from "./Stats";
import Projects from "./Projects";
import CHoose from "./CHoose";

gsap.registerPlugin(ScrollTrigger);

const Horizontal = () => {
  const component = useRef();
  const slider = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="App" ref={component}>
      
      <div ref={slider} className="container">
        
        <div className="panel bg-[#fffaf0] ">
            <CHoose></CHoose>
        </div>
        <div className="panel bg-[#f3ecec]">
            <WhyChooseUs></WhyChooseUs>
        </div>
        <div className="panel bg-[#fffaf0]">
            <Stats></Stats>
        </div>
        <div className="panel bg-[#C1E1C1]">
            <Projects></Projects>
        </div>
      </div>
      
    </div>
  );
}

export default Horizontal
