import React from "react";
import { useState } from "react";

export default function ShowState() {
  function Panel({ title, children }) {
    const [show, setshow] = useState(false);
    const  changeShow = ()=>{
        setshow(true)
    }
    return (
      <div>
        <h1>{title}</h1>
        {/* {children} */}
        {show? 
            // children 在这儿必须加上一个标签
            ( <>{children}</> ) 
            :(<button onClick={changeShow}>显示</button>)
        }
        

        
      </div>
    );
  }
  return (
    <div>
      <Panel title="关于">黄伟鹏</Panel>
      <Panel title="词源">中国</Panel>
    </div>
  );
}


