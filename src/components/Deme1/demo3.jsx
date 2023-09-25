import React from "react";
import { useState } from "react";
import "./index.css"
export default function Express() {
  const [isMe, setIsme] = useState(false);
  const nextOne = () => {
    setIsme(!isMe);
  };
  return (
    <div>
      {isMe ? <Score title="Sarech"></Score> : <Score title="Talor"></Score>}

      {/* 但如果是下面这种方式写就会重置 */}
      {/* 原因就是不在同一区域 */}
      {/* {isMe &&
        <Counter person="Taylor" />
      }

      {!isMe &&
        <Counter person="Sarah" />
      } */} 
      <button onClick={nextOne}>下一位玩家</button>
    </div>
  );
}
function Score({ title }) {
  const [num, setNum] = useState(0);
  return (
    <div className="class">
      {title}的分数是{num}
      <button onClick={() => setNum(num + 1)}>点击+1</button>
    </div>
  );
}
