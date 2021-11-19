import { useEffect, useState } from "react";


function useHorloge() {
  const [date, setDate] = useState(new Date());

  const tick = () => {
    console.log("tick ");
    setDate(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);
  return date;
}


export const Horloge = () => {
  const date = useHorloge();

  return (
    <div>
      <h2>{date.toLocaleTimeString()}</h2>
    </div>
  );
};
