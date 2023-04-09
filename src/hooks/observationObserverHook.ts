import { createSignal } from "solid-js";

export function useIntersectionObserver(id: string) {
  const [isIntersecting, setIsIntersecting] = createSignal(false);

  window.addEventListener(
    "load",
    () => {
      const domElement = document.querySelector(id);
      createObserver(domElement);
    },
    false
  );

  function createObserver(element: Element) {
    const observer = new IntersectionObserver(handleIntersect);
    observer.observe(element);
  }

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting && isIntersecting() === false) {
        setIsIntersecting(true);
      }
    });
  }

  return isIntersecting;
}
