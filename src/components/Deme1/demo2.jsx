import { useState } from 'react';


export default function MyComponent() {
  const [counter, setCounter] = useState(0);

    // 尽量不要把函数组件写在另外一个函数组件当中
    // 因为外层的函数组件的状态值修改，该函数组件就会重新执行一直
    // 这会导致里面的函数组件会重置
    // 正确的方法是写在外面或者写在另外一个文件里面
//   function MyTextField() {
//     const [text, setText] = useState('');

//     return (
//       <input
//         value={text}
//         onChange={e => setText(e.target.value)}
//       />
//     );
//   }
  return (
    <>
      <MyTextField />
      <button onClick={() => {
        setCounter(counter + 1)
      }}>点击了 {counter} 次</button>
    </>
  );
}
function MyTextField() {
    const [text, setText] = useState('');

    return (
      <input
        value={text}
        onChange={e => setText(e.target.value)}
      />
    );
  }