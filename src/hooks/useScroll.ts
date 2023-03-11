import { useState, useEffect } from "react";

const useScrollUp = (): boolean => {
  const [isScrollUp, setIsScrollUp] = useState(false);

  useEffect(() => {
    const initValue = 300;

    let lastY = initValue;
    const handleScroll = (): void => {
      const { scrollY } = window;
      if (scrollY < initValue) return;
      setIsScrollUp(scrollY < lastY);
      lastY = scrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return isScrollUp;
};

export default useScrollUp;
