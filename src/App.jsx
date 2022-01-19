import {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import {
  ControlPanel,
  ShowTimer,
  CheckSpeed,
  DoubleClick,
} from "./UI/";
import "./App.css";

function App() {
  const [timerOn, setTimerOn] = useState(false);
  const [wait, setWait] = useState(false);
  const [time, setTime] = useState(0);
  const timerIdRef = useRef();

  useEffect(() => {
    // console.log("useEffect fire", Date.now());
    if (timerOn) {
      timerIdRef.current = setTimeout(function run() {
        if (!wait) {
          setTime((prev) => prev + 1);
          timerIdRef.current = setTimeout(run, 10);
        }
      }, 10);
    } else {
      clearTimeout(timerIdRef.current);
      setTime(0);
    }
    return () => clearTimeout(timerIdRef.current);
  }, [timerOn, wait]);

  const checkSpeed = useCallback(() => {
    // console.log(" checkSpeed  fire", Date.now());
    if (timerOn) {
      setWait(true);
    } else {
      setWait(false);
      setTimerOn(true);
    }
  }, [timerOn]);

  return (
    <header className={"allTimer shadow"}>
      <ShowTimer time={time} />
      <ControlPanel
        wait={wait}
        setWait={setWait}
        setTime={setTime}
        timerOn={timerOn}
        setTimerOn={setTimerOn}
      />
      <CheckSpeed callback={checkSpeed} />
      <DoubleClick />
    </header>
  );
}

export default App;
