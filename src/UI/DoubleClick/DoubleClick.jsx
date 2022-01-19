import { useState, useRef, useCallback } from "react";
import { Button } from "..";
import "./DoubleClick.css";

const DoubleClick = () => {
  const [indicatorOn, setIndicatorOn] = useState(false);
  const intervalIdRef = useRef();
  const timeoutIdRef = useRef();

  const handleClick = useCallback(() => {
    if (intervalIdRef.current) {
      setIndicatorOn("indicator_on");
    } else {
      setIndicatorOn("indicator_off");
      intervalIdRef.current = setInterval(() => {}, 1);

      timeoutIdRef.current = setTimeout(() => {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = 0;
        clearTimeout(timeoutIdRef.current);
      }, 300);
    }
  }, []);

  return (
    <div className='DoubleClick shadow'>
      <div
        className={`indicator ${indicatorOn} shadow`}
      ></div>
      <Button
        id={6}
        styles={"doubleClick"}
        label={"Double click < 300ms"}
        callback={handleClick}
      />
    </div>
  );
};
export default DoubleClick;
