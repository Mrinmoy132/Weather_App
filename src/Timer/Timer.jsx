import { useRef, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState({
    hr: "00",
    min: "00",
    sec: "00",
    milisec: "00"
  });

  const intervalRef = useRef(null);
  const btnRef = useRef(null);

  const format = (num) => String(num).padStart(2, "0");

  const handleStartStop = () => {
    if (btnRef.current.textContent === "Stop") {
      clearInterval(intervalRef.current);
      btnRef.current.textContent = "Start";
    } else {
      btnRef.current.textContent = "Stop";
      intervalRef.current = setInterval(() => {
        setTime((prev) => {
          let hr = Number(prev.hr);
          let min = Number(prev.min);
          let sec = Number(prev.sec);
          let ms = Number(prev.milisec);

          ms += 1;

          if (ms > 9) {
            ms = 0;
            sec += 1;
          }
          if (sec > 59) {
            sec = 0;
            min += 1;
          }
          if (min > 59) {
            min = 0;
            hr += 1;
          }

          return {
            hr: format(hr),
            min: format(min),
            sec: format(sec),
            milisec: format(ms)
          };
        });
      }, 100);
    }
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime({ hr: "00", min: "00", sec: "00", milisec: "00" });
    btnRef.current.textContent = "Start";
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "20px"
        }}
      >
        <h1>{time.hr}</h1> :<h1>{time.min}</h1> :<h1>{time.sec}</h1> :
        <h1>{time.milisec}</h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          margin: "20px"
        }}
      >
        <button ref={btnRef} onClick={handleStartStop}>
          Start
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default Timer;