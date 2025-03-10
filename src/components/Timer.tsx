import { useState, useEffect } from "react";
const SECOND = 1000;

export default function Timer(bool: boolean, max: number) {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    let intervalId: number;
    if (bool && time != max * SECOND) {
      // setting time from 0 to 1 every 10 millisecond using js setInterval method
      intervalId = setInterval(() => setTime(time + 1), 1);
    }
    return () => clearInterval(intervalId);
  }, [bool, time, max]);
  return time;
}
