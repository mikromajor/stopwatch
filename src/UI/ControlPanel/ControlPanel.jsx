import { memo } from "react";
import { Button } from "..";

const ControlPanel = ({
  wait,
  setWait,
  setTime,
  timerOn,
  setTimerOn,
}) => {
  return (
    <div className={"ControlPanel"}>
      <Button
        id={1}
        styles={wait ? "wait_on" : "wait_off"}
        label={"Wait"}
        callback={() => setWait((prev) => !prev)}
      />

      <Button
        id={2}
        styles={"reset"}
        label={"Reset"}
        callback={() => {
          setWait(false);
          setTime(0);
        }}
      />
      {!timerOn ? (
        <Button
          id={3}
          styles={"start"}
          label={"START"}
          callback={() => {
            setWait(false);
            setTimerOn(true);
          }}
        />
      ) : (
        <Button
          id={4}
          styles={"stop"}
          label={"STOP"}
          callback={() => {
            setWait(false);
            setTimerOn(false);
          }}
        />
      )}
    </div>
  );
};
export default memo(ControlPanel);
