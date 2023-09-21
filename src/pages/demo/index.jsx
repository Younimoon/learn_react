import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function Demo() {
  let [wait, setwait] = useState(0);
  let [finish, setfinish] = useState(0);
  const changewait = () => {
    setwait((n) => 
      n+1
    //   console.log("wait", n);
    );
    // setwait(wait+1)
    // setTimeout(()=>{

    // },3000)
    // if (timer) {
    //   clearInterval(timer);
    // }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if (wait > 0) {
        setfinish(finish + 1);
        setwait(wait - 1);
      }
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, [wait, finish]);
//   setInterval(() => {
//     if (wait > 0) {
//       setfinish(()=> finish + 1);
//       setwait(() =>wait - 1);
//     }
//   }, 3000);
  return (
    <div>
      <h1>等待:{wait}</h1>
      <h1>完成:{finish}</h1>
      <button onClick={changewait}>购买</button>
    </div>
  );
}
