import { useEffect, useState } from "react";
/* 使用 matchMedia 的好處是，web api 不會在每次畫面改動而觸發 callback ，只會在符合 mediaQuery 時觸發 */
/* 使用 inner width 每次畫面寬度變動都會重複觸發 */

const useMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 對 window 新增 media query 監聽
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // mediaQuery 每次改變就會觸發 callback
    const handleMediaQueryChange = (e: MediaQueryListEvent): void => {
      setIsMobile(e.matches);
    };

    // 監聽 mediaQuery 本身的改變
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // unMounted 時觸發 removeEventListener
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return isMobile;
};

export default useMobile;
