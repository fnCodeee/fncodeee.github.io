
export default function LenisScrooling() {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1,
    WheelMultiplier: 1,
    touchMultiplier: 1,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  return requestAnimationFrame(raf);
}
