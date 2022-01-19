import "./ShowTimer.css";

const ShowTimer = ({ time }) => {
  return (
    <h1 className={"timer shadow"}>
      <span>
        {("0" + Math.floor((time / 360000) % 24)).slice(-2)}
        :
      </span>
      <span>
        {("0" + Math.floor((time / 6000) % 60)).slice(-2)}:
      </span>
      <span>
        {("0" + Math.floor((time / 100) % 60)).slice(-2)}:
      </span>
      <span>{("0" + Math.floor(time)).slice(-2)}</span>
    </h1>
  );
};
export default ShowTimer;
