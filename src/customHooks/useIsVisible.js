import { useEffect, useState } from "react";

const useIsVisible = (ref) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [interacted, setInteracted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) {
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setInteracted(true);
    });
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { isIntersecting, interacted };
};

export default useIsVisible;
