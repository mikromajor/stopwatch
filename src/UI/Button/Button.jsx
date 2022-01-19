import { memo, useRef } from "react";
import "./Button.css";

const Button = ({ id, styles, label, callback }) => {
  const render = useRef({
    btn__1: 0,
    btn__2: 0,
    btn__3: 0,
    btn__4: 0,
    btn__5: 0,
    btn__6: 0,
  });
  console.log(
    `Button_${id}  render: ${++render.current[
      `btn__${id}`
    ]} `
  );

  return (
    <button
      id={`btn__${id}`}
      type='button'
      className={`button button__${styles} shadow`}
      onClick={callback}
    >
      {label}
    </button>
  );
};
export default memo(Button);
