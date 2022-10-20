import gsap from "gsap";
import { useLayoutEffect, useRef } from 'react';

export default function Gsap() {
  const containerRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(".box", { rotation: "+=360" });
    }, containerRef);

    return () => ctx.revert();
  });

  return (
    <div ref={containerRef}>
      <div className="box">Hello</div>
    </div>
  );
}