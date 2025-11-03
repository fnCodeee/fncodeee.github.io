
export default function LenisScrooling() {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.06,
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
