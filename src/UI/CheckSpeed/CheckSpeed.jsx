import "./CheckSpeed.css";
import { Button } from "..";

const CheckSpeed = ({ callback }) => {
  return (
    <>
      <p className='check__header shadow_text'>
        Check your speed 2clicks
      </p>
      <Button
        id={5}
        styles={"check"}
        label={"Check speed"}
        callback={callback}
      />
    </>
  );
};
export default CheckSpeed;
