import { useRef } from "react";
import { useCountUp } from "react-countup";

const easingFn = function (t, b, c, d) {
  return c * (Math.pow(t / d - 1, 5) + 1) + b;
};

const CounterNew = (props) => {
  const {
    styles = null,
    data: { startNum = 0, endNum, duration = 5, delay = 1, text },
  } = props;
  const countUpRef = useRef(null);

  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: startNum,
    end: endNum,
    text: text,
    separator: ",",
    smartEasingThreshold: 2000,
    smartEasingAmount: 30,
    easingFn,
    delay,
    duration,
  });
console.log(props.text);
  return (
    // <div style={styles}>
    //   <div ref={countUpRef}>0</div>
    // </div>
    <div className="col-md-6 col-lg-3 mb-4 mb-lg-0 d-flex justify-content-center counter-wrap ftco-animate">
      <div className="block-18">
        <div className="text">
          <strong className="number">
            <div ref={countUpRef}>0</div>
          </strong>

          <span>{props.data.text}</span>
        </div>
      </div>
    </div>
  );
};

export default CounterNew;
