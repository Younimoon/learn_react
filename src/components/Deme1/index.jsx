import { useState } from "react";

export default function Fancy() {
  const [isFancy, setIsFancy] = useState(false);
  // 当需要渲染用一个组件在不同情况下，并且包裹的结构不变化
  // 只要在两个相同的组件切换且切换后位置不变就不会改变state

  
  //  你可能以为当你勾选复选框的时候 state 会被重置，
  // 但它并没有！这是因为 两个 <Counter /> 
  // 标签被渲染在了相同的位置。 
  // React 不知道你的函数里是如何进行条件判断的，
  // 它只会“看到”你返回的树。在这两种情况下，
  // App 组件都会返回一个包裹着 <Counter /> 作为第一个子组件的 div。
  // 这就是 React 认为它们是 同一个 <Counter /> 的原因。
  // 你可以认为它们有相同的“地址”：根组件的第一个子组件的第一个子组件。不管你的逻辑是怎么组织的，这就是 React 在前后两次渲染之间将它们进行匹配的方式。
  if (isFancy) {
    return (
      <div>
        <Counter isFancy={true} />
        <label>
          <input
            type="checkbox"
            checked={isFancy}
            onChange={(e) => {
              setIsFancy(e.target.checked);
            }}
          />
          使用好看的样式
        </label>
      </div>
    );
  }
  return (
    <div>
      <Counter isFancy={false} />
      <label>
        <input
          type="checkbox"
          checked={isFancy}
          onChange={(e) => {
            setIsFancy(e.target.checked);
          }}
        />
        使用好看的样式
      </label>
    </div>
  );
}

function Counter({ isFancy }) {
  const [score, setScore] = useState(0);
  const [hover, setHover] = useState(false);

  let className = "counter";
  if (hover) {
    className += " hover";
  }
  if (isFancy) {
    className += " fancy";
  }

  return (
    <div
      className={className}
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
    >
      <h1>{score}</h1>
      <button onClick={() => setScore(score + 1)}>加一1111111111</button>
    </div>
  );
}
